[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

@cheprasov/react-global-state (v1.2.0)
=========

The library allows to manage global state and nested global states easy. It is based on React Context API and allows to pass states (values & set functions) to children components via Context.

### Features:
- The library use React API for implementation the Global State feature.
- Simple & Powerful work with Global State.
- Allows to have several Global States and nested Global States.
- It supports Functional & Class Components.
- Easy to learn and use.
- Written on TypeScript and support types.

### 1. How to install

```bash
> npm install @cheprasov/react-global-state
```

```javascript
import { createGlobalState, useGlobalState } from '@cheprasov/react-global-state';
```

### 2. Quick examples

#### 2.1. Create new Global State scope

```javascript
import { createGlobalState } from '@cheprasov/react-global-state';

// The original object will not be changed
const userScope = {
    name: 'Alex',
    city: 'London',
    age: 37,
};

const GlobalState = createGlobalState('user', userScope); // return React.FunctionComponent

// Then add once the GlobalState for render at any level you need

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <GlobalState>
      <App />
    </GlobalState>
);

```

#### 2.2. Read / Update Global State at Functional Components
```javascript
import { useGlobalState } from '@cheprasov/react-global-state';

const User: React.FC = () => {

    // Use useGlobalState<UserScopeInterface>('user') for TypeScript
    const globalState = useGlobalState('user');
    const [ name, setName ] = globalState.name; // like useState
    const [ age, setAge ] = globalState.age; // like useState

    const increaseAge = () => {
        // `set function` has the same API like a `set function` from React.useState()
        setAge((value) => value + 1);
    }

    return (
        <div>
            User Name: {name}
            <br />
            Age: {age} <button onClick={increaseAge}>+</button>
        </div>
    );
}
```

#### 2.3. Read / Update Global State at Class Components
```javascript
import React from 'react';
import { withGlobalState } from '@cheprasov/react-global-state';

class UserClass extends React.Component {

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
                Name: {name} <br />
                City: {city} <br />
                Age: {age} <button onClick={this.increaseAge}>+</button> <br />
            </div>
        );
    }
}

const UserClassWithGlobalState = withGlobalState(UserClass, { user: 'userGlobalState' });

export { UserClassWithGlobalState as UserClass };

```

Please see more examples at [demo folder](/demo/).

### 3. Documentation

#### 3.1 Creating a Global State
```typescript
createGlobalState(name: string, scope: Record<string, any>) // Returns React.memo(React.FunctionalComponent)
```
Please note, the `createGlobalState` should be called once and outside a component implementation.

**Params:**
 - name: `string` - Unique name for the scope.
 - scope: `Record<string, any>` - An object that will be used for creating key/values for a scope. The original object will be never changed.

**Returns:**
 - `React.FunctionalComponent` (Wrapped by React.memo). It should be used inside your application (at any render level) for initialisation Global State feature for children components.

**Examples:**
```typescript
const UserGlobalState = createGlobalState('user', { name: 'Alex' });
//...
root.render(
    <GlobalState>
      <App />
    </GlobalState>
);
```
or
```typescript

import { useGlobalState } from '@cheprasov/react-global-state';

const UserGlobalState = createGlobalState('user', { name: 'Alex' });

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

#### 3.2 Reading / Updating Global State
```typescript
useGlobalState(name: string) // Returns { [key: string]: [value, setValue function] }
```
The hook function `useGlobalState(name)` should be used inside Functional Component for getting a scope object with value and set function of Global State.

**Params:**
 - name: `string` - Name of scope.

**Returns:**
- Scope object like `Record<string, [value, setValue function]}`. Or you could think about the scope like an object with keys and result of call `useState()` for each value: `Record<string, useState(value)}`.
Note, the returned scope object is always a new object if any of scope's values is updated.

**Examples:**
```
const userScope = {
    name: 'Alex',
    city: 'London',
    age: 37,
}
const UserGlobalState = createGlobalState('user', userScope);
//...
root.render(
    <GlobalState>
      <App />
    </GlobalState>
);
```
and then
```javascript
import { useGlobalState } from '@cheprasov/react-global-state';

const User: React.FC = () => {

    const globalState = useGlobalState('user');
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

    const [ name, setName ] = globalState.name; // like useState
    const [ city ] = globalState.city; // like useState
    const [ age, setAge ] = globalState.age; // like useState

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
    }, [globalState]);

    return (
        <div>
            User Name: {name} <br />
            City: {city} <br />
            Age: {age} <button onClick={increaseAge}>+</button>
        </div>
    );
}
```

#### 3.3 Using Global State at Class Components

For using Global State with Class Component please wrap the Class Component at Functional Component and provide Global State like a property.

Example:
```javascript
export default class UserClass extends React.Component<React.PropsWithChildren<UserProps>> {

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
    const userState = useGlobalState('user');

    // you can use as many Global States as you need.

    return (
        <UserClass
            userState={userState}
        >
            {children}
        </UserClass>
    );
};
```

Or use HOC function `withGlobalState` that wraps your Class Component automatically for useing Global State.

```typescript
withGlobalState(Component: React.Component, scopeToProp: Record<string, string> ) // Returns Higher-Order Component
```

**Params:**
 - Component: `React.Component` - React.Component for wrapping at Global State.
 - scopeToProp: `Record<string, string>` - Object, where Key is a Global State scope name and Value is name of property that will be used to pass the Global State to the Component. It is allowed to use multiple scopes.

**Returns:**
- Returns Higher-Order Component

**Examples:**

```javascript
export const UserClassWithGlobalState = withGlobalState(
    UserClass, // Original Class, please see above
    { user: 'userGlobalState' }, // <Global Scope Name for key>: <Class Property Name for value>
);
```

#### 3.4 Creating Nested Global Scopes
```typescript
createMultiGlobalStates(scopes: Object) // Returns React.memo(React.FunctionalComponent)
```
Please note, the `createMultiGlobalStates` should be called once and outside a component implementation.

**Params:**
 - scopes: `Object` - An object that will be used for creating key/values for scopes. The original object will be never changed. Allowed to have nested scopes.

 Please note, for creating nested objects like a scope, the object should be wrapped by `Scope()` function.

**Returns:**
 - `React.FunctionalComponent` (Wrapped by React.memo). It should be used inside your application (at any render level) for initialisation Global State feature for children components.

**Examples:**
```typescript

import { Scope } from '@cheprasov/react-global-state';

const nestedScope = {
  app: Scope({
    settings: Scope({
      priceType: 'total',
    }),
    user: Scope({
      name: 'Alex',
      city: 'London',
      age: 37,
      hobby: { // Not a scope
        chess: 'beginner',
        it: 'expert',
      },
    }),
    search: Scope({
      departure: 'London',
      destination: 'Paris',
      date: Date.now(),
      rooms: [
        { adult: 2 },
      ],
      nights: 7,
      filters: Scope({
        rating: 5,
        price: {
          min: 0,
          max: 1000,
        },
      }),
    }),
  }),
};

const GlobalStates = createMultiGlobalStates(nestedScope);

root.render(
    <GlobalStates>
      <App />
    </GlobalStates>
);
```
Use:
```typescript

import { useGlobalState } from '@cheprasov/react-global-state';

const App: React.FC = () => {

    const app = useGlobalState('app');

    const [ departure, setDeparture ] = app.search.departure; // like useState

    // if you need only nested scope like filters
    const filters = useGlobalState;('filters')
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
    }, [app.search.filter.rating[0]]);

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
