import React from 'react';
import { useGlobalState } from '../src/GlobalState/GlobalState';
import User from './components/User';
import UserClass, { UserClassWithGlobalState } from './components/UserClass';
import WrappedUserClass from './components/WrappedUserClass';

function App() {
  return (
    <div className="App">
      <b>React Functional Component:</b><br />
      <User />

      <hr />

      <b>React Higher-Order Class Component:</b><br />
      <UserClassWithGlobalState />

      <hr />

      <b>React Class Component with Wrapper:</b><br />
      <WrappedUserClass />
    </div>
  );
}

export default App;
