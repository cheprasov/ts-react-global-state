import React from 'react';
import { createGlobalState, createStateDefiner, useGlobalState } from './GlobalState'
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

    describe('createGlobalState', () => {
        // it('should create React.Function component wrapped by React.memo', () => {
        //     const GlobalState = createGlobalState('user', { name: 'Alex', age: 37, city: 'London' });
        //     // @ts-ignore
        //     console.log(GlobalState.type, React.isValidElement(GlobalState.type));
        //     // @ts-ignore
        //     expect(GlobalState).toBeInstanceOf(React.isValidElement(GlobalState));
        //     // console.log(GlobalState.$$typeof);
        // });
    });

    describe('useGlobalState', () => {
        const userScope = {
            name: 'Alex',
            city: 'London',
            age: 37,
        }
        let UserGlobalState: any;

        beforeAll(() => {
            UserGlobalState = createGlobalState('user', userScope);
        });

        const User: React.FC = () => {
            const globalState = useGlobalState<typeof userScope>('user');
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

});