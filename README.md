[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

@cheprasov/react-global-state (v3.1.0)
=========

The library allows to manage global state and nested global states easy. It is based on React Context API and allows to pass states (values & set functions) to children components via Context.

### Features:
- The library uses React API for implementation the Global State features.
- Simple & Powerful work with Global State.
- Allows to have several Global States / nested Global States.
- It supports Functional & Class Components.
- Possibility to get/set values to Global States outside react components.
- Is it possibly to subscribe on Global State updates.
- Supports client-side & server-side renders.
- Easy to learn and use.
- Written on TypeScript and supports types.

### 1. How to install

```bash
> npm install @cheprasov/react-global-state
```

```javascript
import { createGlobalScope, useGlobalScope, Scope } from '@cheprasov/react-global-state';
```

### 2. If you know React then you almost know the library already.

#### 2.1. Global Scope (Collection of Global States).
The library's function `createGlobalScope(scope: Object)` allows to create multi states easy under a global scope. And then use hook `useGlobalScope(name: string | Scope)` allows to use any state from the global scope like a separate state param.

**Example**: Creating a Global Scope

```typescript
import { createGlobalScope, Scope } from '@cheprasov/react-global-state';

// The original object will not be changed
const rootScope = new Scope({
    name: 'Alex',
    city: 'London',
    age: 37,
});

const GlobalScope = createGlobalScope(rootScope); // return React.FunctionComponent

const root = ReactDOM.createRoot(document.getElementByI('root'));
root.render(
    <GlobalScope>
        <App />
    </GlobalScope>
);

```

**Example**: Using Global Scope

```typescript
import { useGlobalScope } from '@cheprasov/react-global-state';

const User: React.FC = () => {
    const user = useGlobalScope(); // use empty param for getting root scope
    const [ name, setName ] = user.name; // like useState
    const [ city, setCity] = user.city; // like useState
    const [ age, setAge ] = user.age; // like useState

    const increaseAge = () => {
        // `set function` has the same API like a `set function` from React.useState()
        setAge((value) => value + 1);
    }

    const useEffect(() => {
        // Triggers when any state of the scope is changed
    }, [user])

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

// Note, we use empty key for getting root scope
const UserClassWithGlobalScope = withGlobalScope(UserClass, { '': 'userGlobalScope' });

export { UserClassWithGlobalScope as UserClass };

```

#### 2.2. Creating Nested Global Scopes / Multi Global Scopes.

The main idea of the library is operation with Nested Global Scopes. For example, you can created complicated structure of Global Scopes with nested Global Scopes.

Let's check the example:
```typescript
const rootScopes = new Scope({
    app: new Scope({
        settings: new Scope({
            priceType: 'total',
        }),
        user: new Scope({
            name: 'Alex',
            city: 'London',
            age: 37,
            hobby: { // Not a scope
                chess: 'beginner',
                it: 'expert',
            },
        }),
        search: new Scope({
            departure: 'London',
            destination: 'Paris',
            date: Date.now(),
            rooms: [
                { adult: 2 },
            ],
            nights: 7,
            filters: new Scope({
                rating: 5,
                price: {
                    min: 0,
                    max: 1000,
                },
            }),
        }),
    }),
});

const GlobalScopes = createGlobalStates(rootScopes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalScopes>
        <App />
    </GlobalScopes>
);
```

In the example below we created 6 global scopes: root, `app`, `settings`, `user`, `search` and `filters`. As you can see global scope `filters` is nested to global scope `search`, and `search` is nested to global scope `app`. Also, global scopes `user` and `setting` are nested to `app` scope too.

This nested model creates relationship between the global scopes. If any field in a scope is updated then the scope will be updated too, and as result all parent scopes will be updated too. Like a bubbling principle. When a state updates on an scope, it first updates the scope, then on its parent scope, then all the way up on other parent scopes.

For example. We can change desctination at `search` scope.
```typescript
const SomeComponent = () => {
    // ...
    const searchGlobalScope = useGlobalScope('app.search');
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
    const userScope = appGlobalScope.user; // or useGlobalScope('app.user');
    const settingsScope = appGlobalScope.settings; // or useGlobalScope('app.settings');
    const searchScope = appGlobalScope.search; // or useGlobalScope('app.search');
    const filtersScope = appGlobalScope.filters; // or useGlobalScope('app.search.filters');

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

#### 2.3. Demo examples
Please see more examples at [demo folder](/demo/).

### 3. Documentation

#### 3.1. Global Scope

#### 3.1.1. Creating a Global Scope
```typescript
createGlobalScope(scope: Scope) // Returns React.memo(React.FunctionalComponent)
```
Please note, the `createGlobalScope` should be called once and outside a component implementation.

**Params:**
 - scope: `Scope` - A Scope object with scope sctucture.

**Returns:**
 - `React.FunctionalComponent` (Wrapped by React.memo). It should be used inside your application (at any render level) for initialisation Global State feature for children components.

**Examples:**
```typescript
const GlobalScope = createGlobalScope(new Scope({ name: 'Alex' }));
//...
root.render(
    <GlobalScope>
      <App />
    </GlobalScope>
);
```
or
```typescript

import { useGlobalScope } from '@cheprasov/react-global-state';

const GlobalScope = createGlobalScope(new Scope({ name: 'Alex' }));

const App: React.FC = () => {
    // ...
    return (
        <GlobalScope>
            All components here will be able to use the global scope
            <div className="App">
                <SomeComponents>
                    ...
                </SomeComponents>
            </div>
        </GlobalScope>
    );
}
```

#### 3.1.2. Reading / Updating Global Scope
```typescript
useGlobalScope(name: string | Scope = '') // Returns Scope { [key: string]: [value, setValue function] }
```
The hook function `useGlobalScope()` should be used inside a Functional Component for getting a scope object with value and set functions for each state in the scope.

**Params:**
 - name: `string | Scope` - Name of scope. Use empty param for using root scope.

**Returns:**
- `ScopeVariablesWrapper` object like `Record<string, [value, setValue function]}`. Or you could think about the scope like an object with keys and result of call `useState()` for each value: `Record<string, useState(value)}`.
Note, the returned wrapped scope object is always a new object if any of scope's values is updated.

**Examples:**
```TypeScript
const userScope = new Scope({
    name: 'Alex',
    city: 'London',
    age: 37,
});
const UserGlobalScope = createGlobalScope(userScope);
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

    const globalScope = useGlobalScope();
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

#### 3.1.3. Using Global Scope at Class Components

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
    const userScope = useGlobalScope();

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
    { '': 'userGlobalScope' }, // <Global Scope Name for key>: <Class Property Name for value>
    // Note, we use empty key for getting root scope to userGlobalScope prop
);
```

#### 3.1.4. Creating Nested Global Scopes
```typescript
createGlobalScope(scope: Scope) // Returns React.memo(React.FunctionalComponent)
```
Please note, the `createGlobalScope` should be called once and outside a component implementation.

**Params:**
 - scope: `Scope` - A Scope object. Allowed to have nested scopes.

 Please note, for creating nested objects like a scope, the object should be wrapped by `new Scope(...)` class.

**Returns:**
 - `React.FunctionalComponent` (Wrapped by React.memo). It should be used inside your application (at any render level) for initialisation Global State feature for children components.

**Examples:**
```typescript

import { Scope } from '@cheprasov/react-global-state';

const rootScope = new Scope({
  app: new Scope({
    settings: new Scope({
      priceType: 'total',
    }),
    user: new Scope({
      name: 'Alex',
      city: 'London',
      age: 37,
      hobby: { // Not a scope
        chess: 'beginner',
        it: 'expert',
      },
    }),
    search: new Scope({
      departure: 'London',
      destination: 'Paris',
      date: Date.now(),
      rooms: [
        { adult: 2 },
      ],
      nights: 7,
      filters: new Scope({
        rating: 5,
        price: {
          min: 0,
          max: 1000,
        },
      }),
    }),
  }),
});

const GlobalScope = createGlobalScope(rootScope);

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
#### 3.1.5. Import/Export Global Scopes

`useGlobalScope(...)` returns an instance of `ScopeVariablesWrapper` object. The objects has the following methods:
- `toObject()` - it converts states of scope and nested scopes to JavaScript object. The object could be used any way you want.

**Examples:**
```typescript

import { Scope } from '@cheprasov/react-global-state';

const rootScope = new Scope({
  app: new Scope({
    settings: new Scope({
      priceType: 'total',
    }),
    user: new Scope({
      name: 'Alex',
      city: 'London',
      age: 37,
      hobby: { // Not a scope
        chess: 'beginner',
        it: 'expert',
      },
    }),
    search: new Scope({
      departure: 'London',
      destination: 'Paris',
      date: Date.now(),
      rooms: [
        { adult: 2 },
      ],
      nights: 7,
      filters: new Scope({
        rating: 5,
        price: {
          min: 0,
          max: 1000,
        },
      }),
    }),
  }),
});

const GlobalScope = createGlobalScope(rootScope);

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
    const filters = useGlobalScope('app.search.filters');
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
