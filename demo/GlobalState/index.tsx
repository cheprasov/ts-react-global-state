import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalScope } from '../../src/GlobalState/GlobalState';
import App from './App';
import type { ConfigScopeInf } from './types';

const ConfigGlobalState = createGlobalScope('config',  {
  env: 'prod',
  lang: 'English',
} as ConfigScopeInf);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigGlobalState>
      <App/>
    </ConfigGlobalState>
  </React.StrictMode>
);