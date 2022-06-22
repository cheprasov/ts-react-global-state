import React, { useEffect } from 'react';
import { useGlobalScope } from '../../src/GlobalState/GlobalState';
import Search from './components/Search';
import Settings from './components/Settings';
import User from './components/User';
import { AppNestedScopeInf } from './types';

function App() {
  const appScope = useGlobalScope<AppNestedScopeInf['app']>('app');
  console.log(appScope);
  appScope.settings.toObject()

  useEffect(() => {
    //@ts-ignore
    console.log('App state is updated', appScope, appScope.toObject(), JSON.stringify(appScope.toObject()));
  }, [appScope])

  useEffect(() => {
    console.log('User Name is updated', appScope.user.name[0]);
  }, [appScope.user.name[0]])

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
