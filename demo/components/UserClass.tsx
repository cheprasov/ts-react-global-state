import React from 'react';
import { GlobalStateType, withGlobalState } from '../../src/GlobalState/GlobalState';
import { UserScopeInf } from '../types';

interface UserProps {
    userGlobalState: GlobalStateType<UserScopeInf> | undefined;
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

        return (
            <div>
                User Name: {name} <br />
                City: {city} <br />
                Age: {age} <button onClick={this.decrementAge}>-</button> / <button onClick={this.increaseAge}>+</button>
            </div>
        );
    }
}

export const UserClassWithGlobalState = withGlobalState(UserClass, 'user', 'userGlobalState');