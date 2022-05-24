import React, { useEffect, useMemo } from 'react';
import { useGlobalState } from '../../../src/GlobalState/GlobalState';
import { AppNestedScopeInf } from '../types';
import Hobby from './Hobby';

const User: React.FC = () => {
    const userState = useGlobalState<AppNestedScopeInf['app']['user']>('user');
    const [ name, setName ] = userState.name; // like useState
    const [ city ] = userState.city; // like useState
    const [ age, setAge ] = userState.age; // like useState

    const updateName = () => {
        setName(Math.round(Math.random() * 100000).toString(36));
    }

    const increaseAge = () => {
        setAge((value: number) => value + 1);
    }

    const decrementAge = () => {
        setAge((value: number) => value - 1);
    }

    useEffect(() => {
        console.log('Name is changed, new name:', name);
    }, [name]);

    useEffect(() => {
        console.log('Some value of user scope is changed', name, city, age);
    }, [userState]);

    const hobbies = useMemo(() => {
        return Object.entries(userState.hobby).map(([key, [value, setValue]]) => {
            return <Hobby key={key} name={key} value={value} onChange={setValue} />
        });
    }, [userState.hobby])

    return (
        <div>
            User <br />
            Name: {name} <button onClick={updateName}>Change</button><br />
            City: {city} <br />
            Age: {age} <button onClick={decrementAge}>-</button> / <button onClick={increaseAge}>+</button><br />
            <br />
            Hobby: <br />
            {hobbies}
        </div>
    );
}

export default React.memo(User);