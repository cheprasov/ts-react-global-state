import React from 'react';
import { Scope } from './Scope';
export type TScopeByKey = Map<string, Scope>;
export declare const createGlobalScope: (scope: Scope) => React.NamedExoticComponent<{
    children?: React.ReactNode;
}>;
