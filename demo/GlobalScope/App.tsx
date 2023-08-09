import React, { useEffect } from 'react';
import Search from './components/Search';
import Settings from './components/Settings';
import User from './components/User';
import { TAppUseScope } from './types';
import { useGlobalScope } from '../../src';

function App() {
  const appScope = useGlobalScope<TAppUseScope['app']>('app');
  const [ test, setTest ] = appScope.settings.test;

  //@ts-ignore
  //console.log(appScope.counter.value);

  useEffect(() => {
    setTimeout(() => {
      const r = Math.random().toString(36);
      appScope.search.filters.rating.setValue(r as any);
      appScope.search.departure.setValue(r);
      appScope.search.destination.setValue(r as any);
      appScope.search.nights.setValue(r as any);
      appScope.user.name.setValue(r as any);
      appScope.user.city.setValue(r as any);
      appScope.user.age.setValue(r as any);
      // console.log('increment');
      // @ts-ignore
      //appScope.counter.dispatchStateValue({ type: 'increment' });
    }, 5000000);

    setTimeout(() => {
      const r = Math.random().toString(36);
      console.log('appScope as obj', appScope.toObject());
      // appScope.fromObject({
      //     settings: {
      //       priceType: 'New total',
      //     },
      //     counter: 42,
      //     user: {
      //       name: 'New Alex',
      //       city: 'New London',
      //       age: 42,
      //       hobby: {
      //         chess: 'New beginner',
      //         it: 'New expert',
      //       },
      //     },
      //     search: {
      //       departure: 'New London',
      //       destination: 'New Paris',
      //       date: Date.now(),
      //       rooms: [
      //         { adult: 3 },
      //       ],
      //       nights: 30,
      //       filters: {
      //         rating: 10,
      //         price: {
      //           min: 1000,
      //           max: 2000,
      //         },
      //       },
      //     },
      //   });
    }, 5000);

  }, []);

  useEffect(() => {
    //@ts-ignore
    //console.log('App state is updated', appScope, appScope.toObject(), JSON.stringify(appScope.toObject()));
    console.log('App state is updated', appScope);
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
        {/* counter: {appScope.counter.stateValue.counter} */}
      </div>
      <Search />
    </div>
  );
}

export default React.memo(App);
