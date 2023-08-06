import * as React from 'react';
import { Scope } from './Scope';
import { createGlobalScope } from './createGlobalScope';
import { useGlobalScope } from './useGlobalScope';
import { withGlobalScope } from './withGlobalScope';
import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('withGlobalScope', () => {
    const userScope = new Scope({
        name: 'Alex',
        city: 'London',
        age: 37,
    });
    const configScope = new Scope({
        lang: 'English',
        env: 'test',
    });
    const rootScope = new Scope({
        user: userScope,
        config: configScope,
    });
    let GlobalScope: React.NamedExoticComponent;

    beforeAll(() => {
        GlobalScope = createGlobalScope(rootScope);
    });

    afterAll(() => {
    });

    class TestClass extends React.Component<React.PropsWithChildren<{ userScope?: any }>> {
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
        userScope?: any,
        configScope?: any
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
        const globalState = useGlobalScope('user') as any;
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
            // @ts-ignore
            <GlobalScope>
                <TestClass />
            </GlobalScope>
        );
        const userElement = container.querySelector('.User');
        expect(userElement).not.toBeNull();
        expect(userElement?.textContent).toEqual('No Scope');
    });

    it('should use Global State if withGlobalScope is used for Class Component', () => {
        const TestClassWithGlobalState = withGlobalScope(TestClass, { 'user': 'userScope' })
        const { container } = render(
            // @ts-ignore
            <GlobalScope>
                <TestClassWithGlobalState />
            </GlobalScope>
        );
        const userElement = container.querySelector('.User');
        expect(userElement).not.toBeNull();
        expect(userElement?.textContent).toEqual(userScope.getValue('name'));
    });

    it('should with children well if Class Component uses Global State', () => {
        const TestClassWithGlobalState = withGlobalScope(TestClass, { 'user': 'userScope' })
        const { container } = render(
            // @ts-ignore
            <GlobalScope>
                <TestClassWithGlobalState>
                    Foo Bar
                </TestClassWithGlobalState>
            </GlobalScope>
        );
        const element = container.querySelector('.Children');
        expect(element).not.toBeNull();
        expect(element?.textContent).toEqual('Foo Bar');
    });

    it('should render new value if Global State scope is updated', async () => {
        const TestClassWithGlobalState = withGlobalScope(TestClass, { 'user': 'userScope' });
        const newName = 'Super Alex';
        const { container } = render(
            // @ts-ignore
            <GlobalScope>
                <TestClassWithGlobalState />
                <Updater newName={newName} />
            </GlobalScope>
        );
        const userElement = container.querySelector('.User');
        expect(userElement).not.toBeNull();
        expect(userElement?.textContent).toEqual(userScope.getValue('name'));

        await act(async () => {
            const button = container.querySelector('.Updater button') as Element;
            await userEvent.click(button);
        });

        expect(userElement?.textContent).toEqual(newName);
    });

    it('should allow to use several Global States at Class Components', () => {
        const TestClassWithGlobalState = withGlobalScope(TestClass2, { user: 'userScope', config: 'configScope' });
        const { container } = render(
            // @ts-ignore
            <GlobalScope>
                <TestClassWithGlobalState />
            </GlobalScope>
        );
        expect(container.querySelector('.User')?.textContent).toEqual(userScope.getValue('name'));
        expect(container.querySelector('.Language')?.textContent).toEqual(configScope.getValue('lang'));
    });
});