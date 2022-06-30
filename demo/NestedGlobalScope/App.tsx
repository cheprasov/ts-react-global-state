import React, { useEffect } from 'react';
import { useGlobalScope } from '../../src/GlobalState/GlobalState';
import Search from './components/Search';
import Settings from './components/Settings';
import User from './components/User';
import { AppNestedScopeInf } from './types';

function App() {
  const appScope = useGlobalScope<AppNestedScopeInf['app']>('app');

  //@ts-ignore
  console.log(appScope.counter.stateValue.toObject());
  appScope.settings.toObject()

  useEffect(() => {
    console.log('setTimeout');
    setTimeout(() => {
      const r = Math.random().toString(36);
      appScope.search.filters.rating.setStateValue(r as any);
      appScope.search.departure.setStateValue(r);
      appScope.search.destination.setStateValue(r as any);
      appScope.search.nights.setStateValue(r as any);
      appScope.user.name.setStateValue(r as any);
      appScope.user.city.setStateValue(r as any);
      appScope.user.age.setStateValue(r as any);
      console.log('increment');
      // @ts-ignore
      appScope.counter.dispatchStateValue({ type: 'increment' });
    }, 2000);

    setTimeout(() => {
      const r = Math.random().toString(36);
      appScope.fromObject({
          settings: {
            priceType: 'New total',
          },
          counter: 42,
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
    }, 5000);

  }, []);

  useEffect(() => {
    //@ts-ignore
    console.log('App state is updated', appScope, appScope.toObject(), JSON.stringify(appScope.toObject()));
  }, [appScope]);

  useEffect(() => {
    console.log('User Name is updated', appScope.user.name[0]);
  }, [appScope.user.name[0]]);

  return (
    <div className="App">
      Application:
      <Settings />
      <User />
      <div>
        counter: {appScope.counter.stateValue.counter}
      </div>
      <Search />
    </div>
  );
}

export default React.memo(App);
