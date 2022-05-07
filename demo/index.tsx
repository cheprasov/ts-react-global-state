import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalState } from '../src/GlobalState/GlobalState';
import App from './App';
import type { UserScopeInf } from './types';

const userScope: UserScopeInf = {
  name: 'Alex',
  city: 'London',
  age: 37,
}

const GlobalState = createGlobalState('user',  userScope);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalState>
      <App/>
    </GlobalState>
  </React.StrictMode>
);