import React from 'react';
import { createGlobalScope, createGlobalState } from '../../src/GlobalState/GlobalState';
import User from './components/User';
import UserClass, { UserClassWithGlobalScope } from './components/UserClass';
import WrappedUserClass from './components/WrappedUserClass'
import { UserScopeInf } from './types';

const FooGlobalState = createGlobalState('foo', 42);

const userScope: UserScopeInf = {
  name: 'Alex',
  city: 'London',
  age: 37,
}

const UserGlobalScope = createGlobalScope('user',  userScope, { config: 'config' });

function App() {
  return (
    <FooGlobalState>
      <UserGlobalScope>
        <div className="App">
          <b>React Functional Component:</b><br />
          <User />

          <hr />

          <b>User class without Global State:</b><br />
          <UserClass role='Admin'>
            Adam & Eva
          </UserClass>

          <hr />

          <b>React Higher-Order Class Component:</b><br />
          <UserClassWithGlobalScope role='Admin'>
            Adam & Eva
          </UserClassWithGlobalScope>

          <hr />

          <b>React Class Component with Wrapper:</b><br />
          <WrappedUserClass>
            Adam & Eva
          </WrappedUserClass>
        </div>
      </UserGlobalScope>
    </FooGlobalState>
  );
}

export default App;
