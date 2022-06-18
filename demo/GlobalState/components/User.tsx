import React, { useEffect } from 'react';
import { useGlobalScope, useGlobalState } from '../../../src/GlobalState/GlobalState';
import { ConfigScopeInf, UserScopeInf } from '../types';

const User: React.FC = () => {

    const [foo, setFoo] = useGlobalState<number>('foo'); // Like useState

    const userGlobalScope = useGlobalScope<UserScopeInf>('user');
    // globalState = {
    //    name: ['Alex', setName],
    //    city: ['London', setCity],
    //    age: [37, setAge]
    // }

    // Or think about it like useState for each the scope object property
    // globalState = {
    //    name: useState('Alex'),
    //    city: useState('London'),
    //    age: useState(37)
    // }

    const [ name, setName ] = userGlobalScope.name; // like useState
    const [ city ] = userGlobalScope.city; // like useState
    const [ age, setAge ] = userGlobalScope.age; // like useState


    const configGlobalState = useGlobalScope<ConfigScopeInf>('config');
    const [ env ] = configGlobalState.env; // like useState

    const increaseAge = () => {
        // `set function` has the same API like a `set function` from React.useState()
        setAge((value: number) => value + 1);
        // or
        // setAge(38);
    }

    const decrementAge = () => {
        setAge((value: number) => value - 1);
    }

    useEffect(() => {
        // shows message only if name is changed
        console.log('Name is changed, new name:', name);
    }, [name]);

    useEffect(() => {
        // shows message if any of scope values is changed
        console.log('Some value of user scope is changed', name, city, age);
    }, [userGlobalScope]);

    return (
        <div>
            Env: {env} <br />
            User Name: {name} <br />
            City: {city} <br />
            Age: {age} <button onClick={decrementAge}>-</button> / <button onClick={increaseAge}>+</button> <br />
            Foo: {foo} <br />
        </div>
    );
}

export default User;