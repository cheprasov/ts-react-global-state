import React, { useEffect } from 'react';
import { useGlobalScope } from '../../src/GlobalState/GlobalState';
import Search from './components/Search';
import Settings from './components/Settings';
import User from './components/User';
import { AppNestedScopeInf } from './types';

function App() {
  const appScope = useGlobalScope<AppNestedScopeInf['app']>('app');
  console.log(appScope.search.toObject());
  appScope.settings.toObject()

  useEffect(() => {
    setTimeout(() => {
      const r = Math.random().toString(36);
      appScope.search.filters.rating.setStateValue(r as any);
      appScope.search.departure.setStateValue(r);
      appScope.search.destination.setStateValue(r as any);
      appScope.search.nights.setStateValue(r as any);
      appScope.user.name.setStateValue(r as any);
      appScope.user.city.setStateValue(r as any);
      appScope.user.age.setStateValue(r as any);
    }, 5000);

    setTimeout(() => {
      const r = Math.random().toString(36);
      appScope.fromObject({
          settings: {
            priceType: 'New total',
          },
          user: {
            name: 'New Alex',
            city: 'New London',
            age: 42,
            hobby: {
              chess: 'New beginner',
              it: 'New expert',
            },
          },
          search: {
            departure: 'New London',
            destination: 'New Paris',
            date: Date.now(),
            rooms: [
              { adult: 3 },
            ],
            nights: 30,
            filters: {
              rating: 10,
              price: {
                min: 1000,
                max: 2000,
              },
            },
          },
        });
    }, 10000);

  }, []);

  useEffect(() => {
    //@ts-ignore
    console.log('App state is updated', appScope, appScope.toObject(), JSON.stringify(appScope.toObject()));
  }, [appScope]);

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
