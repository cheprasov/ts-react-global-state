import React, { useEffect, useMemo } from 'react';
import { TAppScope } from '../types';
import Hobby from './Hobby';
import { useGlobalScope } from '../../../src/global-scope/useGlobalScope';

const User: React.FC = () => {
    const userScope = useGlobalScope<TAppScope['app']['user']>('app.user');

    const [ name, setName ] = userScope.name; // like useState
    const [ city ] = userScope.city; // like useState
    const [ age, setAge ] = userScope.age; // like useState

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
    }, [userScope]);

    const hobbies = useMemo(() => {
        return Object.entries(userScope.hobby).map(([key, [value, setValue]]) => {
            return <Hobby key={key} name={key} value={value} onChange={setValue} />
        });
    }, [userScope.hobby])

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