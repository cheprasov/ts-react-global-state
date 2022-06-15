import React, { useEffect, useState } from 'react';
import {
    contextByScopeName,
    createGlobalScope,
    createMultiGlobalScopes,
    createStateDefiner,
    useGlobalScope,
    withGlobalScope,
} from './GlobalState'
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfigScopeInf, UserScopeInf } from '../../demo/demo1/types';
import { GlobalStateType } from '../../dist';
import ComponentWrapper from '../ComponentsWrapper/ComponentWrapper';
import { Scope } from './Scope';

describe('GlobalState', () => {

    describe('createStateDefiner', () => {
        it('should create a new function', () => {
            const f = createStateDefiner({foo: 10, bar: 20, baz: 30});
            expect(f).toBeInstanceOf(Function);
        });

        it('should create function with correct body', () => {
            const f = createStateDefiner({foo: 10, bar: 20, baz: 30});
            expect(f.toString()).toEqual(
`function anonymous(o,u
) {
var n = {};
n["foo"] = u(o["foo"]);
n["bar"] = u(o["bar"]);
n["baz"] = u(o["baz"]);
return n;
}`
            );
        });

        describe('Created function', () => {
            let scope: Record<string, any>;
            let useStateMock: typeof React.useState;
            let stateDefiner: ReturnType<typeof createStateDefiner>

            beforeEach(() => {
                scope = {foo: 10, bar: 20, baz: 30};
                useStateMock = jest.fn((v) => [v, `set ${v}`]) as any;
                stateDefiner = createStateDefiner(scope);
            });

            it('should call useState function for each key/value of scope', () => {
                stateDefiner(scope, useStateMock);
                expect(useStateMock).toBeCalledTimes(Object.keys(scope).length);
                Object.values(scope).forEach((value) => {
                    expect(useStateMock).toBeCalledWith(value);
                });
            });

            it('should return an object with state for each scope key', () => {
                const obj = stateDefiner(scope, useStateMock);
                expect(Object.keys(obj).length).toEqual(Object.keys(scope).length);
                Object.keys(obj).forEach((key) => {
                    expect(obj[key]).toEqual(useStateMock(scope[key]));
                });
            });

            it('should return a new object for call', () => {
                const obj1 = stateDefiner(scope, useStateMock);
                const obj2 = stateDefiner(scope, useStateMock);
                expect(obj1).toEqual(obj2);
                expect(obj1).not.toBe(obj2);
            });

            it('should stringify correct complicated keys', () => {
                scope = {
                    foo: 1,
                    1: 2,
                    "": 3,
                    'with space': 4,
                    "\"test\"": 5,
                    "привет": 6,
                    "\t\r\n": 7,
                };
                stateDefiner = createStateDefiner(scope);
                const obj = stateDefiner(scope, useStateMock);
                Object.keys(obj).forEach((key) => {
                    expect(key in scope).toBeTruthy();
                    expect(obj[key]).toEqual(useStateMock(scope[key]));
                });
            })
        });

    });

    describe('createGlobalScope', () => {
        const appScope = {
            foo: 'bar',
        };
        const userScope = {
            name: 'Alex',
            city: 'London',
            age: 37,
        }
        afterEach(() => {
            contextByScopeName.clear();
        });

        it('should create React.Function component wrapped by React.memo', () => {
            const GlobalState = createGlobalScope('user', { name: 'Alex', age: 37, city: 'London' });
            expect(GlobalState['$$typeof']).toEqual(Symbol.for('react.memo'));
        });

        it('should throw an Error if scope created already', () => {
            createGlobalScope('user', { name: 'Alex', age: 37, city: 'London' });
            expect(() => {
                createGlobalScope('user', { foo: 'bar' });
            }).toThrowError("GlobalState scope 'user' already exists");
        });

        it('should attach nested scope', () => {
            const UserGlobalState = createGlobalScope('user', userScope);
            const AppGlobalState = createGlobalScope('app', appScope, { user: 'user' });

            const Component: React.FC<{}> = () => {
                const app = useGlobalScope('app');
                return (<div className="output">{JSON.stringify(app)}</div>);
            };

            const wrapper = render(
                <ComponentWrapper components={[UserGlobalState, AppGlobalState]}>
                    <Component />
                </ComponentWrapper>
            );
            const elem = wrapper.container.querySelector('.output');
            expect(JSON.parse(elem?.textContent || '')).toEqual({
                foo: ['bar', null],
                user: {
                    name: ['Alex', null],
                    city: ['London', null],
                    age: [37, null],
                }}
            );
        });

        it('should use default values if nested GlobalScope is not rendered', () => {
            const UserGlobalState = createGlobalScope('user', userScope);
            const AppGlobalState = createGlobalScope('app', appScope, { user: 'user' });

            const Component: React.FC<{}> = () => {
                const app = useGlobalScope('app');
                return (<div className="output">{JSON.stringify(app)}</div>);
            };

            const wrapper = render(
                <ComponentWrapper components={[AppGlobalState]}>
                    <Component />
                </ComponentWrapper>
            );
            const elem = wrapper.container.querySelector('.output');
            expect(JSON.parse(elem?.textContent || '')).toEqual({
                foo: ['bar', null],
                user: {
                    name: ['Alex', null],
                    city: ['London', null],
                    age: [37, null],
                }}
            );
        });
    });

    describe('useGlobalScope', () => {
        const userScope = {
            name: 'Alex',
            city: 'London',
            age: 37,
        }
        let UserGlobalState: any;

        beforeAll(() => {
            UserGlobalState = createGlobalScope('user', userScope);
        });

        afterAll(() => {
            contextByScopeName.clear();
        });

        const User: React.FC = () => {
            const globalState = useGlobalScope<typeof userScope>('user');
            const [ name ] = globalState.name;
            const [ city ] = globalState.city;
            const [ age, setAge ] = globalState.age;

            const increaseAge = () => {
                setAge((a) => a + 1);
            }

            return (
                <div className="User">
                    <div>
                        User Name: <span className="User__name">{name}</span>
                    </div>
                    <div>
                        City: <span className="User__city">{city}</span>
                    </div>
                    <div>
                        Age: <span className="User__age">{age}</span>
                        <button className="User__ageButton" onClick={increaseAge}>+</button>
                    </div>
                </div>
            );
        }

        it('should use state values from GlobalState scope "user"', () => {
            const { container } = render(
                <UserGlobalState>
                    <User />
                </UserGlobalState>
            );
            const userElement = container.querySelector('.User');
            expect(userElement).not.toBeNull();
            Object.keys(userScope).forEach((key) => {
                expect(userElement?.querySelector(`.User__${key}`)?.textContent)
                    .toEqual(userScope[key as keyof typeof userScope].toString());
            });
        });

        it('should provided updates values from GlobalScope for all consumers', async () => {
            const wrapper = render(
                <UserGlobalState>
                    <User />
                    <User />
                </UserGlobalState>
            );
            const userElements = wrapper.container.querySelectorAll('.User');
            expect(userElements).toHaveLength(2);
            const button = userElements[0]?.querySelector('.User__ageButton') as Element;
            const userAge1 = userElements[0]?.querySelector('.User__age') as Element;
            const userAge2 = userElements[1]?.querySelector('.User__age') as Element;
            for (let i = 1; i <= 100; i += 1) {
                await userEvent.click(button);
                expect(userAge1?.textContent).toEqual(`${userScope.age + i}`);
                expect(userAge2?.textContent).toEqual(`${userScope.age + i}`);
            }
        });

        it('should not change original scope', async () => {
            const scopeCopy = { ...userScope };
            const wrapper = render(
                <UserGlobalState>
                    <User />
                </UserGlobalState>
            );
            const userElement = wrapper.container.querySelector('.User');
            const button = userElement?.querySelector('.User__ageButton') as Element;
            const userAge = userElement?.querySelector('.User__age') as Element;
            for (let i = 1; i <= 100; i += 1) {
                await userEvent.click(button);
                expect(userAge?.textContent).toEqual(`${userScope.age + i}`);
                expect(userScope).toEqual(scopeCopy);
            }
        });
    });

    describe('withGlobalScope', () => {
        const userScope: UserScopeInf = {
            name: 'Alex',
            city: 'London',
            age: 37,
        }
        const configScope: ConfigScopeInf = {
            lang: 'English',
            env: 'test',
        }
        let UserGlobalState: any;

        beforeAll(() => {
            UserGlobalState = createGlobalScope('user', { ...userScope });
        });

        afterAll(() => {
            contextByScopeName.clear();
        });

        class TestClass extends React.Component<React.PropsWithChildren<{ userScope?: GlobalStateType<UserScopeInf> }>> {
            render() {
                if (!this.props.userScope) {
                    return (<div className="User">No Scope</div>);
                }
                const [ name ] = this.props.userScope.name;
                return (
                    <>
                        <div className="User">{ name }</div>
                        <div className="Children">{ this.props.children }</div>
                    </>
                );
            }
        }

        class TestClass2 extends React.Component<React.PropsWithChildren<{
            userScope?: GlobalStateType<UserScopeInf>,
            configScope?: GlobalStateType<ConfigScopeInf>
        }>> {
            render() {
                if (!this.props.userScope || !this.props.configScope) {
                    return (<div className="User">No Scope</div>);
                }
                const [ name ] = this.props.userScope.name;
                const [ lang ] = this.props.configScope.lang;
                return (
                    <>
                        <div className="User">{ name }</div>
                        <div className="Language">{ lang }</div>
                    </>
                );
            }
        }

        const Updater: React.FC<{newName: string}> = ({ newName }) => {
            const globalState = useGlobalScope<typeof userScope>('user');
            const [ , setName ] = globalState.name;

            const updateName = () => {
                setName(newName);
            }

            return (
                <div className="Updater">
                    <button onClick={updateName}></button>
                </div>
            );
        }

        it('should return function', () => {
            expect(typeof withGlobalScope(TestClass, { user: 'userScope' })).toEqual('function');
        });

        it('should return a new function each time', () => {
            expect(withGlobalScope(TestClass, { user: 'userScope' }))
                .not.toBe(withGlobalScope(TestClass, { user: 'userScope' }));
        });

        it('should not use Global State if withGlobalScope is not used for Class Component', () => {
            const { container } = render(
                <UserGlobalState>
                    <TestClass />
                </UserGlobalState>
            );
            const userElement = container.querySelector('.User');
            expect(userElement).not.toBeNull();
            expect(userElement?.textContent).toEqual('No Scope');
        });

        it('should use Global State if withGlobalScope is used for Class Component', () => {
            const TestClassWithGlobalState = withGlobalScope(TestClass, { user: 'userScope' })
            const { container } = render(
                <UserGlobalState>
                    <TestClassWithGlobalState />
                </UserGlobalState>
            );
            const userElement = container.querySelector('.User');
            expect(userElement).not.toBeNull();
            expect(userElement?.textContent).toEqual(userScope.name);
        });

        it('should with children well if Class Component uses Global State', () => {
            const TestClassWithGlobalState = withGlobalScope(TestClass, { user: 'userScope' })
            const { container } = render(
                <UserGlobalState>
                    <TestClassWithGlobalState>
                        Foo Bar
                    </TestClassWithGlobalState>
                </UserGlobalState>
            );
            const element = container.querySelector('.Children');
            expect(element).not.toBeNull();
            expect(element?.textContent).toEqual('Foo Bar');
        });

        it('should render new value if Global State scope is updated', async () => {
            const TestClassWithGlobalState = withGlobalScope(TestClass, { user: 'userScope' });
            const newName = `Super ${useState.name}`;
            const { container } = render(
                <UserGlobalState>
                    <TestClassWithGlobalState />
                    <Updater newName={newName} />
                </UserGlobalState>
            );
            const userElement = container.querySelector('.User');
            expect(userElement).not.toBeNull();
            expect(userElement?.textContent).toEqual(userScope.name);

            const button = container.querySelector('.Updater button') as Element;
            await userEvent.click(button);

            expect(userElement?.textContent).toEqual(newName);
        });

        it('should allow to use several Global States at Class Components', () => {
            const ConfigGlobalState = createGlobalScope('config', configScope);
            const TestClassWithGlobalState = withGlobalScope(TestClass2, { user: 'userScope', config: 'configScope' });
            const { container } = render(
                <ConfigGlobalState>
                    <UserGlobalState>
                        <TestClassWithGlobalState />
                    </UserGlobalState>
                </ConfigGlobalState>
            );
            expect(container.querySelector('.User')?.textContent).toEqual(userScope.name);
            expect(container.querySelector('.Language')?.textContent).toEqual(configScope.lang);
        });
    });

    describe('createMultiGlobalScopes', () => {
        beforeEach(() => {
            contextByScopeName.clear();
        });

        it('should create several global states', () => {
            const GlobalStates = createMultiGlobalScopes({
                foo: Scope({ value: 42 }),
                bar: Scope({ value: 10 }),
                baz: Scope({ value: 33 }),
            });

            expect(contextByScopeName.has('foo')).toEqual(true);
            expect(contextByScopeName.has('bar')).toEqual(true);
            expect(contextByScopeName.has('baz')).toEqual(true);
        });

        it('should create global states only for scoped objects', () => {
            const GlobalStates = createMultiGlobalScopes({
                foo: { value: 42 },
                bar: { value: 10 },
                baz: Scope({ value: 33 }),
            });

            expect(contextByScopeName.has('foo')).toEqual(false);
            expect(contextByScopeName.has('bar')).toEqual(false);
            expect(contextByScopeName.has('baz')).toEqual(true);
        });

        it('should create nested scope', () => {
            const GlobalStates = createMultiGlobalScopes({
                foo: Scope({
                    value: 42,
                    bar: Scope({
                        value: 10,
                        baz: Scope({
                            value: 33
                        }),
                    }),
                }),
            });

            const Component: React.FC<{}> = () => {
                const foo = useGlobalScope('foo');
                return (<div className="output">{JSON.stringify(foo)}</div>);
            };

            const wrapper = render(
                <GlobalStates>
                    <Component />
                </GlobalStates>
            );
            const elem = wrapper.container.querySelector('.output');
            expect(JSON.parse(elem?.textContent || '')).toEqual({
                value: [42, null],
                bar: {
                    value: [10, null],
                    baz: {
                        value: [33, null],
                    }
                },
            });
        });

        it('should update parent scope if child scope is updated', async () => {
            const initState = {
                foo: Scope({
                    value: 42,
                    bar: Scope({
                        value: 10,
                        baz: Scope({
                            value: 33
                        }),
                    }),
                }),
            };
            const GlobalStates = createMultiGlobalScopes(initState);

            const testFunction = jest.fn();

            const Component: React.FC<{}> = () => {
                const foo = useGlobalScope('foo');
                useEffect(() => {
                    testFunction(JSON.parse(JSON.stringify(foo)));
                }, [foo]);
                return (<div className="output">{JSON.stringify(foo)}</div>);
            };

            const Component2: React.FC<{}> = () => {
                const { value: [ value, setValue ] } = useGlobalScope<typeof initState.foo.bar.baz>('baz');
                const onClick = () => {
                    setValue(v => v + 1);
                };
                return (<button onClick={onClick} />);
            };

            const wrapper = render(
                <GlobalStates>
                    <Component />
                    <Component2 />
                </GlobalStates>
            );

            expect(testFunction).toHaveBeenCalledTimes(1);
            expect(testFunction).toHaveBeenCalledWith({
                value: [42, null],
                bar: {
                    value: [10, null],
                    baz: {
                        value: [33, null],
                    }
                },
            });

            const button = wrapper.container.querySelector('button') as HTMLButtonElement;

            testFunction.mockClear();
            await userEvent.click(button);

            expect(testFunction).toHaveBeenCalledTimes(1);
            expect(testFunction).toHaveBeenCalledWith({
                value: [42, null],
                bar: {
                    value: [10, null],
                    baz: {
                        value: [34, null],
                    }
                },
            });

            testFunction.mockClear();
            await userEvent.click(button);

            expect(testFunction).toHaveBeenCalledTimes(1);
            expect(testFunction).toHaveBeenCalledWith({
                value: [42, null],
                bar: {
                    value: [10, null],
                    baz: {
                        value: [35, null],
                    }
                },
            });
        });

    });

});