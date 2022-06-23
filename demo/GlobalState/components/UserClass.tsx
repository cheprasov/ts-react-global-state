import React from 'react';
import { withGlobalScope } from '../../../src/GlobalState/GlobalState';
import { ScopeStatesType } from '../../../src/GlobalState/types';
import { ConfigScopeInf, UserScopeInf } from '../types';

interface UserProps {
    role: string;
    userGlobalScope?: ScopeStatesType<UserScopeInf>;
    configGlobalScope?: ScopeStatesType<ConfigScopeInf>;
}

export default class UserClass extends React.Component<React.PropsWithChildren<UserProps>> {

    decrementAge = () => {
        if (this.props.userGlobalScope) {
            const [ , setAge ] = this.props.userGlobalScope.age;
            setAge && setAge((value: number) => value - 1);
        }
    }

    increaseAge = () => {
        if (this.props.userGlobalScope) {
            const [ , setAge ] = this.props.userGlobalScope.age;
            setAge && setAge((value: number) => value + 1);
        }
    }

    render() {
        if (!this.props.userGlobalScope) {
            return (
                <div>
                    User Scope is not provided
                </div>
            );
        }

        const [ name ] = this.props.userGlobalScope.name; // like useState
        const [ city ] = this.props.userGlobalScope.city; // like useState
        const [ age ] = this.props.userGlobalScope.age; // like useState

        const [ env = 'Undefined' ]  = this.props.configGlobalScope?.env || [];

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

export const UserClassWithGlobalScope = withGlobalScope(UserClass, {user: 'userGlobalScope', config: 'configGlobalScope' });
