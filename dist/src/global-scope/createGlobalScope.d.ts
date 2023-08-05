import React from 'react';
import { Scope } from './Scope';
export declare type TScopeByKey = Map<string, Scope>;
export declare const createGlobalScope: (scope: Scope) => React.NamedExoticComponent<{
    children?: React.ReactNode;
}>;
