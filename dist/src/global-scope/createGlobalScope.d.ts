import React from 'react';
import { Scope } from './Scope';
export type TScopeByKey = Map<string, Scope<any>>;
export declare const createGlobalScope: (scope: Scope<any>) => React.NamedExoticComponent<{
    children?: React.ReactNode;
}>;
