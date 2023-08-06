import React from 'react';
import { Scope } from './Scope';
import { TContextByScopeOrName } from './types';
export declare const createGlobalScopeContext: (scope: Scope, key: string, contextByScopeOrName: TContextByScopeOrName) => React.NamedExoticComponent<{
    children?: React.ReactNode;
}>;
