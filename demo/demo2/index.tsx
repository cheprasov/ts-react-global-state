import React from 'react';
import ReactDOM from 'react-dom/client';
import { createMultiGlobalStates } from '../../src/GlobalState/GlobalState';
import App from './App';

const nestedScope = {
  app: {
    settings: {
      priceType: 'total' // total | perPerson
    },
    user: {
      name: 'Alex',
      city: 'London',
      age: 37,
      hobby: {
        chess: 'beginner',
        it: 'expert',
      },
    },
    search: {
      departure: 'London',
      destination: 'Paris',
      date: Date.now(),
      rooms: [
        { adult: 2 },
      ],
      nights: 7,
      filters: {
        rating: 5,
        price: {
          min: 0,
          max: 1000,
        },
      }
    }
  },
};

const AppNestedState = createMultiGlobalStates(nestedScope);

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