[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

@cheprasov/react-global-state (v0.0.1-dev5)
=========

The library based on React Context API and allows to use global state easy.

**Note:** Currently React Class Components are not supported. Work in progress.

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

const userScope = {
    name: 'Alex',
    city: 'London',
    age: 37,
}

const GlobalState = createGlobalState('user', userScope); // return React.FunctionComponent

// Then add once the GlobalState for render at any level you need

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <GlobalState>
      <App />
    </GlobalState>
);

```

#### 2.2. Read / Update Global State
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

### 3. Documentation

WIP
