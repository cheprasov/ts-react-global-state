import React, { useEffect } from 'react';
import { useGlobalReducer, useGlobalScope, useGlobalState } from '../../../src/GlobalState/GlobalState';
import { UserStateInf } from '../types';

const User: React.FC = () => {

    const [user, dispath] = useGlobalReducer<UserStateInf, any>('user');

    const increaseAge = () => {
        // `set function` has the same API like a `set function` from React.useState()
        dispath && dispath({ type: 'age/increment' });
        // or
        // setAge(38);
    }

    const decrementAge = () => {
        dispath && dispath({ type: 'age/decrement' });
    }

    useEffect(() => {
        // shows message if any of scope values is changed
        console.log('Some value of user state is changed');
    }, [user]);

    return (
        <div>
            User Name: {user.name} <br />
            City: {user.city} <br />
            Age: {user.age} <button onClick={decrementAge}>-</button> / <button onClick={increaseAge}>+</button> <br />
            Update: {user.update} <br />
            Json: {JSON.stringify(user)} <br />
        </div>
    );
}

export default User;