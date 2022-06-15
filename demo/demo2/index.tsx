import React from 'react';
import ReactDOM from 'react-dom/client';
import { createMultiGlobalScopes } from '../../src/GlobalState/GlobalState';
import { Scope } from '../../src/GlobalState/Scope';
import App from './App';

const nestedScope = {
  app: Scope({
    settings: Scope({
      priceType: 'total' // total | perPerson
    }),
    user: Scope({
      name: 'Alex',
      city: 'London',
      age: 37,
      hobby: Scope({
        chess: 'beginner',
        it: 'expert',
      }),
    }),
    search: Scope({
      departure: 'London',
      destination: 'Paris',
      date: Date.now(),
      rooms: [
        { adult: 2 },
      ],
      nights: 7,
      filters: Scope({
        rating: 5,
        price: {
          min: 0,
          max: 1000,
        },
      }),
    }),
  }),
};

const AppNestedState = createMultiGlobalScopes(nestedScope);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppNestedState>
      <App/>
    </AppNestedState>
  </React.StrictMode>
);