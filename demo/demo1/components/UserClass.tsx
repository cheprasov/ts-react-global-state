import React from 'react';
import { GlobalStateType, withGlobalState } from '../../../src/GlobalState/GlobalState';
import { ConfigScopeInf, UserScopeInf } from '../types';

interface UserProps {
    role: string;
    userGlobalState?: GlobalStateType<UserScopeInf>;
    configGlobalState?: GlobalStateType<ConfigScopeInf>;
}

export default class UserClass extends React.Component<React.PropsWithChildren<UserProps>> {

    decrementAge = () => {
        if (this.props.userGlobalState) {
            const [ , setAge ] = this.props.userGlobalState.age;
            setAge((value: number) => value - 1);
        }
    }

    increaseAge = () => {
        if (this.props.userGlobalState) {
            const [ , setAge ] = this.props.userGlobalState.age;
            setAge((value: number) => value + 1);
        }
    }

    render() {
        if (!this.props.userGlobalState) {
            return (
                <div>
                    User Scope is not provided
                </div>
            );
        }

        const [ name ] = this.props.userGlobalState.name; // like useState
        const [ city ] = this.props.userGlobalState.city; // like useState
        const [ age ] = this.props.userGlobalState.age; // like useState

        const [ env = 'Undefined' ]  = this.props.configGlobalState?.env || [];

        return (
            <div>
                Env: {env} <br />
                Role: {this.props.role} <br />
                Name: {name} <br />
                City: {city} <br />
                Age: {age} <button onClick={this.decrementAge}>-</button> / <button onClick={this.increaseAge}>+</button> <br />
                Children: <span>{this.props.children}</span>
            </div>
        );
    }
}

export const UserClassWithGlobalState = withGlobalState(UserClass, {user: 'userGlobalState', config: 'configGlobalState' });
