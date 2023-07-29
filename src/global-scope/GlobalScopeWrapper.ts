import React, { Context } from 'react';
import { Scope } from './Scope';

export interface IGlobalScopeWrapperData {
    contextByScopeOrName: Map<string | Scope, Context<any>>
};

export const GlobalScopeWrapper = React.createContext<IGlobalScopeWrapperData>({
    contextByScopeOrName: new Map(),
});