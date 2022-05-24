import React from 'react';
import { createGlobalState } from '../../src/GlobalState/GlobalState';
import User from './components/User';
import UserClass, { UserClassWithGlobalState } from './components/UserClass';
import WrappedUserClass from './components/WrappedUserClass'
import { UserScopeInf } from './types';

const userScope: UserScopeInf = {
  name: 'Alex',
  city: 'London',
  age: 37,
}

const UserGlobalState = createGlobalState('user',  userScope, { config: 'config' });

function App() {
  return (
    <UserGlobalState>
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
        <UserClassWithGlobalState role='Admin'>
          Adam & Eva
        </UserClassWithGlobalState>

        <hr />

        <b>React Class Component with Wrapper:</b><br />
        <WrappedUserClass>
          Adam & Eva
        </WrappedUserClass>
      </div>
    </UserGlobalState>
  );
}

export default App;
