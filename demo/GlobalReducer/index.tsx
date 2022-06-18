import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalReducer } from '../../src/GlobalState/GlobalState';
import App from './App';
import { UserStateInf } from './types';


const userState: UserStateInf = {
  name: 'Alex',
  city: 'London',
  age: 37,
  update: 0,
};

const reducer = (state: typeof userState, action: any): any => {
  let { age } = state;
  if (action.type === 'age/increment') {
    age += 1;
  }
  return {
    ...state,
    age,
    update: Date.now(),
  };
}

const UserGlobalReducer = createGlobalReducer('user',  reducer, userState);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserGlobalReducer>
      <App/>
    </UserGlobalReducer>
  </React.StrictMode>
);