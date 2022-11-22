[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

@cheprasov/react-global-state (v2.1.0)
=========

The library allows to manage global state and nested global states easy. It is based on React Context API and allows to pass states (values & set functions) to children components via Context.

### Features:
- The library use React API for implementation the Global State feature.
- Simple & Powerful work with Global State.
- Allows to have several Global States and nested Global States.
- It supports Functional & Class Components.
- Easy to learn and use.
- Written on TypeScript and supports types.

### 1. How to install

```bash
> npm install @cheprasov/react-global-state
```

```javascript
import {
    createGlobalState, useGlobalState,
    createGlobalReducer, useGlobalReducer,
    createGlobalScope, useGlobalScope,
    createMultiGlobalScopes, withGlobalScope,
} from '@cheprasov/react-global-state';
```

### 2. If you know React then you almost know the library already.

#### 2.1. Global State.
React provides `useState` hook for working with local state for creating a new state and using it.

The library splits creating and using features to 2 separate functions:
- `createGlobalState(name: string, initialValue: any)` - function for creating a new global state and should be used outside a component and should be called only once for creating a new state.
- `useGlobalState(name: string)` - the hook allows to use global state inside a component.

**Example:** Creating a Global State values

```typescript
import { createGlobalState } from '@cheprasov/react-global-state';

// The original object will not be changed

const GlobalCounter = createGlobalState('count', 0);
// Created global state with name `count` and initial value `0`. The name allows to use the global state inside a component.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalCounter>
        <App />
    </GlobalCounter>
);
```

**Example:** Using a Global State values

```typescript
import { useGlobalState } from '@cheprasov/react-global-state';

const Counter: React.FC = () => {
    const  [ count, setCount ] = useGlobalState<number>('count'); // like useState

    const increaseCount = () => {
        // `set function` has the same API like a `set function` from React.useState()
        setCount((value) => value + 1);
    }

    return (
        <div>
            Counter: {count} <button onClick={increaseCount}>+</button>
        </div>
    );
}
```

#### 2.2. Global Reducer
React provides `useReducer` hook for working with local states for creating a new state and using it.

This library splits creating and using features to 2 separate functions:
- `createGlobalReducer(name: string, reducer: Function, initialState: any, initialiser?: Function)` - function for creating a new global state and should be used outside a component and should be called only once for creating a new state.
- `useGlobalReducer(name: string)` - the hook allows to use global reducer inside a component.

**Example:** Creating a new Global Reducer

```typescript
const userState = {
  name: 'Alex',
  city: 'London',
  age: 37,
};

const reducer = (state, action) => {
    let { age } = state;
    if (action.type === 'age/increment') {
        age += 1;
    }
    if (action.type === 'age/decrement') {
        age -= 1;
    }
    return {
        ...state,
        age,
    };
}

const UserGlobalReducer = createGlobalReducer('user',  reducer, userState);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserGlobalReducer>
        <App/>
    </UserGlobalReducer>
);
```

**Example:** Creating a new Global Reducer

```typescript
import { useGlobalReducer } from '../../../src/GlobalState/GlobalState';

const User: React.FC = () => {

    const [user, dispath] = useGlobalReducer('user');
    //` useGlobalReducer` has the same return params like `useReducer`

    const increaseAge = () => {
        dispath({ type: 'age/increment' });
    }

    const decrementAge = () => {
        dispath({ type: 'age/decrement' });
    }

    useEffect(() => {
        console.log('Some value of user state is changed');
    }, [user]);

    return (
        <div>
            Name: {user.name} <br />
            City: {user.city} <br />
            Age: {user.age} <button onClick={decrementAge}>-</button> / <button onClick={increaseAge}>+</button> <br />
        </div>
    );
}

export default User;
```

#### 2.3. Global Scope (Global Collection of states).
The library's function `createGlobalScope(name: string: scope: Object)` allows to create multi states easy under a global scope. And the hook `useGlobalScope(name: string)` allows to use any state from the global scope like a separate state param.

**Example**: Creating a Global Scope

```typescript
import { createGlobalScope } from '@cheprasov/react-global-state';

// The original object will not be changed
const userScope = {
    name: 'Alex',
    city: 'London',
    age: 37,
};

const UserGlobalScope = createGlobalScope('user', userScope); // return React.FunctionComponent

const root = ReactDOM.createRoot(document.getElementByI('root'));
root.render(
    <UserGlobalScope>
        <App />
    </UserGlobalScope>
);

```

**Example**: Using Global Scope

```typescript
import { useGlobalScope } from '@cheprasov/react-global-state';

const User: React.FC = () => {
    const userScope = useGlobalScope('user');
    const [ name, setName ] = userScope.name; // like useState
    const [ city, setCity] = userScope.city; // like useState
    const [ age, setAge ] = userScope.age; // like useState

    const increaseAge = () => {
        // `set function` has the same API like a `set function` from React.useState()
        setAge((value) => value + 1);
    }

    const useEffect(() => {
        // Triggers when any state of the scope is changed
    }, [useScope])

    return (
        <div>
            Name: {name} <br />
            City: {city} <br />
            Age: {age} <button onClick={increaseAge}>+</button>
        </div>
    );
}
```

** Example:** GlobalScope at Class Components

```javascript
import React from 'react';
import { withGlobalScope } from '@cheprasov/react-global-state';

class UserClass extends React.Component {

    increaseAge = () => {
        if (this.props.userGlobalScope) {
            const [ , setAge ] = this.props.userGlobalScope.age;
            setAge((value: number) => value + 1);
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

        return (
            <div>
                Name: {name} <br />
                City: {city} <br />
                Age: {age} <button onClick={this.increaseAge}>+</button> <br />
            </div>
        );
    }
}

const UserClassWithGlobalScope = withGlobalScope(UserClass, { user: 'userGlobalScope' });

export { UserClassWithGlobalScope as UserClass };

```

#### 2.4. Creating Nested Global Scopes / Multi Global Scopes.

The main idea of the library is operation with Nested Global Scopes. For example, you can created complicated structure of Global Scopes with nested Global Scopes and Global Reducers.

Let's check the example:
```typescript
const nestedScopes = {
    app: new GlobalScope({
        settings: new GlobalScope({
            priceType: 'total',
        }),
        user: new GlobalScope({
            name: 'Alex',
            city: 'London',
            age: 37,
            hobby: { // Not a scope
                chess: 'beginner',
                it: 'expert',
            },
        }),
        search: new GlobalScope({
            departure: 'London',
            destination: 'Paris',
            date: Date.now(),
            rooms: [
                { adult: 2 },
            ],
            nights: 7,
            filters: new GlobalScope({
                rating: 5,
                price: {
                    min: 0,
                    max: 1000,
                },
            }),
        }),
    }),
};

const GlobalScopes = createMultiGlobalScopes(nestedScopes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalScopes>
        <App />
    </GlobalScopes>
);
```

In the example below we created 5 global scopes: `app`, `settings`, `user`, `search` and `filters`. As you can see global scope `filters` is nested to global scope `search`, and `search` is nested to global scope `app`. Also, global scopes `user` and `setting` are nested to `app` scope too.

This nested model creates relationship between the global scopes. If any field in a scope is updated then the scope will be updated, and as result all parent scopes will be updated too. Like a bubbling principle.When a state updates on an scope, it first updates the scope, then on its parent scope, then all the way up on other parent scopes.

For example. We can change desctination at `search` scope.
```typescript
const SomeComponent = () => {
    // ...
    const searchGlobalScope = useGlobalScope('search');
    const [ destination, setDestionation ] = searchGlobalScope.destination;
    // ...
        setDestionation('Rome');
    // ...
}
```
The `destination` of global scope `search` is update to `Rome`, then whole global scope `search` will be updated, and then global scope `app` will be updated. Note, scopes `filters`, `user` and `setting` will not be updated.

Example:

```typescript
const App = () => {
    // ...
    const appScope = useGlobalScope('app');
    const userScope = appGlobalScope.user; // or useGlobalScope('user');
    const settingsScope = appGlobalScope.settings; // or useGlobalScope('settings');
    const searchScope = appGlobalScope.search; // or useGlobalScope('search');
    const filtersScope = appGlobalScope.filters; // or useGlobalScope('filters');

    useEffect(() => {
        // will be called if any state is updated at any of nested scopes
    }, [appScope]);

    useEffect(() => {
        // will be called if any state of `user` scope is updated
    }, [userScope]);

    useEffect(() => {
        // will be called if any state of `filters` scope is updated
    }, [filtersScope]);

    useEffect(() => {
        // will be called if any state of `filters` or `search` scopes is updated
    }, [searchScope]);

}
```

#### 2.5. Demo examples
Please see more examples at [demo folder](/demo/).

### 3. Documentation

#### 3.1. Global State

#### 3.3.1. Creating a Global State
```typescript

createGlobalState(name: string, initialState: any | (() => any)) // Returns React.memo(React.FunctionalComponent)
```
Please note, the `createGlobalState` should be called once and outside a component implementation.

**Params:**
 - name: `string` - Unique name for the scope.
 - initialState: `any | (() => any)` - Initial value or function for initialisation an initial value. It has the same API as standard hook `React.useState(initialState: any | (() => any))`

**Returns:**
 - `React.FunctionalComponent` (Wrapped by React.memo). It should be used inside your application (at any render level) for initialisation Global State feature for children components.

**Examples:**
```typescript
import { useGlobalScope } from '@cheprasov/react-global-state';

const UserGlobalState = createGlobalScope('user', 'Alex');

const App: React.FC = () => {
    // ...
    return (
        <div className="App">
            <SomeComponents>
                ...
            </SomeComponents>
            <UserGlobalState>
                Components here will be able to use the 'user' global state
            </UserGlobalState>
        </div>
    );
}
```

#### 3.3.2. Reading / Updating Global Scope
```typescript
useGlobalState(name: string) // Returns { [key: string]: [value, setValue function] }
```
The hook `useGlobalState(name)` should be used inside a Functional Component for getting a state with value and set functions.

**Params:**
 - name: `string` - Name of Global State.

**Returns:**
- Return an array with value and set value function. `[value, setValue]` (Almost the same like standard hook `React.useState(...)`). The returned array also has additional props:
    - `globalState` - The property is always `true`.
    - `stateValue` - The alias for the first `[0]` element in the array;
    - `setStateValue` - The alias for the second `[1]` element in the array;

**Examples:**

```javascript
import { useGlobalState } from '@cheprasov/react-global-state';

const User: React.FC = () => {

    const [ name, setName ] = useGlobalState('user'); // like useState

    useEffect(() => {
        // shows message only if name is changed
        console.log('Name is changed, new name:', name);
    }, [name]);

    return (
        <div>
            User Name: {name} <br />
        </div>
    );
}
```

#### 3.3. Global Scope

#### 3.3.1. Creating a Global Scope
```typescript
createGlobalScope(name: string, scope: Record<string, any>) // Returns React.memo(React.FunctionalComponent)
```
Please note, the `createGlobalScope` should be called once and outside a component implementation.

**Params:**
 - name: `string` - Unique name for the scope.
 - scope: `Record<string, any>` - An object that will be used for creating key/values for a scope. The original object will be never changed.

**Returns:**
 - `React.FunctionalComponent` (Wrapped by React.memo). It should be used inside your application (at any render level) for initialisation Global State feature for children components.

**Examples:**
```typescript
const UserGlobalScope = createGlobalScope('user', { name: 'Alex' });
//...
root.render(
    <UserGlobalScope>
      <App />
    </UserGlobalScope>
);
```
or
```typescript

import { useGlobalScope } from '@cheprasov/react-global-state';

const UserGlobalScope = createGlobalScope('user', { name: 'Alex' });

const App: React.FC = () => {
    // ...
    return (
        <div className="App">
            <SomeComponents>
                ...
            </SomeComponents>
            <UserGlobalScope>
                Components here will be able to use the 'user' global scope
            </UserGlobalScope>
        </div>
    );
}
```

#### 3.3.2. Reading / Updating Global Scope
```typescript
useGlobalScope(name: string) // Returns Scope { [key: string]: [value, setValue function] }
```
The hook function `useGlobalScope(name)` should be used inside a Functional Component for getting a scope object with value and set functions for each state in the scope.

**Params:**
 - name: `string` - Name of scope.

**Returns:**
- `Scope` object like `Record<string, [value, setValue function]}`. Or you could think about the scope like an object with keys and result of call `useState()` for each value: `Record<string, useState(value)}`.
Note, the returned scope object is always a new object if any of scope's values is updated.

**Examples:**
```
const userScope = {
    name: 'Alex',
    city: 'London',
    age: 37,
}
const UserGlobalScope = createGlobalScope('user', userScope);
//...
root.render(
    <UserGlobalScope>
      <App />
    </UserGlobalScope>
);
```
and then
```javascript
import { useGlobalScope } from '@cheprasov/react-global-state';

const User: React.FC = () => {

    const globalScope = useGlobalScope('user');
    // globalScope = {
    //    name: ['Alex', setName],
    //    city: ['London', setCity],
    //    age: [37, setAge]
    // }

    // Or think about it like useState for each the scope object property
    // globalScope = {
    //    name: useState('Alex'),
    //    city: useState('London'),
    //    age: useState(37)
    // }

    const [ name, setName ] = globalScope.name; // like useState
    const [ city ] = globalScope.city; // like useState
    const [ age, setAge ] = globalScope.age; // like useState

    const increaseAge = () => {
        // `set function` has the same API like a `set function` from React.useState()
        setAge((value) => value + 1);
        // or
        // setAge(38);
    }

    useEffect(() => {
        // shows message only if name is changed
        console.log('Name is changed, new name:', name);
    }, [name]);

    useEffect(() => {
        // shows message if any of scope values is changed
        console.log('Some values of user scope are changed', name, city, age);
    }, [globalScope]);

    return (
        <div>
            User Name: {name} <br />
            City: {city} <br />
            Age: {age} <button onClick={increaseAge}>+</button>
        </div>
    );
}
```

#### 3.3.3. Using Global Scope at Class Components

For using Global Scope with Class Component please wrap the Class Component at Functional Component and provide Global Scope like a property.

Example:
```javascript
export default class UserClass extends React.Component<React.PropsWithChildren<UserProps>> {

    increaseAge = () => {
        if (this.props.userGlobalScope) {
            const [ , setAge ] = this.props.userGlobalScope.age;
            setAge((value: number) => value + 1);
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

        return (
            <div>
                Name: {name} <br />
                City: {city} <br />
                Age: {age} <button onClick={this.increaseAge}>+</button> <br />
            </div>
        );
    }
}
```

```javascript
const WrappedUserClass = ({ children = undefined }) => {
    const userScope = useGlobalScope('user');

    // you can use as many Global Scopes as you need.

    return (
        <UserClass
            userGlobalScope={userScope}
        >
            {children}
        </UserClass>
    );
};
```

Or use HOC function `withGlobalScope` that wraps your Class Component automatically for using Global Scope.

```typescript
withGlobalScope(Component: React.Component, scopeToProp: Record<string, string> ) // Returns Higher-Order Component
```

**Params:**
 - Component: `React.Component` - React.Component for wrapping at Global State.
 - scopeToProp: `Record<string, string>` - Object, where Key is a Global Scope name and Value is name of property that will be used to pass the Global State to the Component. It is allowed to use multiple scopes.

**Returns:**
- Returns Higher-Order Component

**Examples:**

```javascript
export const UserClassWithGlobalScope = withGlobalScope(
    UserClass, // Original Class, please see above
    { user: 'userGlobalScope' }, // <Global Scope Name for key>: <Class Property Name for value>
);
```

#### 3.3.4. Creating Nested Global Scopes
```typescript
createMultiGlobalScopes(scopes: Object) // Returns React.memo(React.FunctionalComponent)
```
Please note, the `createMultiGlobalScopes` should be called once and outside a component implementation.

**Params:**
 - scopes: `Object` - An object that will be used for creating key/values for scopes. The original object will be never changed. Allowed to have nested scopes.

 Please note, for creating nested objects like a scope, the object should be wrapped by `Scope()` function.

**Returns:**
 - `React.FunctionalComponent` (Wrapped by React.memo). It should be used inside your application (at any render level) for initialisation Global State feature for children components.

**Examples:**
```typescript

import { GlobalScope, GlobalReducer } from '@cheprasov/react-global-state';

const nestedScope = {
  app: new GlobalScope({
    settings: new GlobalScope({
      priceType: 'total',
    }),
    user: new GlobalScope({
      name: 'Alex',
      city: 'London',
      age: 37,
      hobby: { // Not a scope
        chess: 'beginner',
        it: 'expert',
      },
    }),
    search: new GlobalScope({
      departure: 'London',
      destination: 'Paris',
      date: Date.now(),
      rooms: [
        { adult: 2 },
      ],
      nights: 7,
      filters: new GlobalScope({
        rating: 5,
        price: {
          min: 0,
          max: 1000,
        },
      }),
    }),
  }),
};

const GlobalScope = createMultiGlobalScopes(nestedScope);

root.render(
    <GlobalScope>
      <App />
    </GlobalScope>
);
```
Use:
```typescript

import { useGlobalScope } from '@cheprasov/react-global-state';

const App: React.FC = () => {

    const app = useGlobalScope('app');

    const [ departure, setDeparture ] = app.search.departure; // like useState

    // if you need only nested scope like filters
    const filters = useGlobalScope('filters');
        const [ rating, setRating ] = filters.rating; // like useState

    useEffect(() => {
        console.log('Any property of the app scope or any nested scope is updated');
    }, [app]);

     useEffect(() => {
        console.log('Any property of the app.search scope or any nested scope if app.search is updated');
    }, [app.search]);

     useEffect(() => {
        console.log('Any property of the app.search.filters scope is updated');
    }, [app.search.filter]);

    useEffect(() => {
        console.log('Rating property of the app.search.filters scope is updated');
    }, [rating]); // or `app.search.filter.rating.stateValue`
    // Note `app.search.filter.rating.stateValue` is an alias for app.search.filter.rating[0];

    return (
        <div className="App">
            <SomeComponents>
                ...
            </SomeComponents>
            ...
        </div>
    );
}
```
#### 3.3.5. Import/Export Global Scopes

`useGlobalScope(...)` returns an instance of `Scope` object. The objects has the following methods:
- `toObject()` - it converts states of scope and nested scopes to JavaScript object. The object could be used any way you want.
- `fromObject(obj)` - it takes passed object and updates states of the scope and nested scopes.

**Examples:**
```typescript

import { GlobalScope, GlobalReducer } from '@cheprasov/react-global-state';

const nestedScope = {
  app: new GlobalScope({
    settings: new GlobalScope({
      priceType: 'total',
    }),
    user: new GlobalScope({
      name: 'Alex',
      city: 'London',
      age: 37,
      hobby: { // Not a scope
        chess: 'beginner',
        it: 'expert',
      },
    }),
    search: new GlobalScope({
      departure: 'London',
      destination: 'Paris',
      date: Date.now(),
      rooms: [
        { adult: 2 },
      ],
      nights: 7,
      filters: new GlobalScope({
        rating: 5,
        price: {
          min: 0,
          max: 1000,
        },
      }),
    }),
  }),
};

const GlobalScope = createMultiGlobalScopes(nestedScope);

root.render(
    <GlobalScope>
      <App />
    </GlobalScope>
);
```
Use:
```typescript

import { useGlobalScope } from '@cheprasov/react-global-state';

const App: React.FC = () => {

    const app = useGlobalScope('app');

    const [ departure, setDeparture ] = app.search.departure; // like useState

    // if you need only nested scope like filters
    const filters = useGlobalScope('filters');
        const [ rating, setRating ] = filters.rating; // like useState

    useEffect(() => {
        console.log('Any property of the app scope or any nested scope is updated');
    }, [app]);

     useEffect(() => {
        console.log('Any property of the app.search scope or any nested scope if app.search is updated');
    }, [app.search]);

     useEffect(() => {
        console.log('Any property of the app.search.filters scope is updated');
    }, [app.search.filter]);

    useEffect(() => {
        console.log('Rating property of the app.search.filters scope is updated');
    }, [rating]); // or `app.search.filter.rating.stateValue`
    // Note `app.search.filter.rating.stateValue` is an alias for app.search.filter.rating[0];

    return (
        <div className="App">
            <SomeComponents>
                ...
            </SomeComponents>
            ...
        </div>
    );
}
```

## Something does not work

Feel free to fork project, fix bugs, write tests and finally request for pull
