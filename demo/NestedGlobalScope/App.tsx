import React, { useEffect } from 'react';
import { useGlobalScope } from '../../src/GlobalState/GlobalState';
import Search from './components/Search';
import Settings from './components/Settings';
import User from './components/User';
import { AppNestedScopeInf } from './types';

function App() {
  const appState = useGlobalScope<AppNestedScopeInf['app']>('app');

  useEffect(() => {
    console.log('App state is updated', appState);
  }, [appState])

  useEffect(() => {
    console.log('User Name is updated', appState.user.name[0]);
  }, [appState.user.name[0]])

  return (
    <div className="App">
      Application:
      <Settings />
      <User />
      <Search />
    </div>
  );
}

export default App;
