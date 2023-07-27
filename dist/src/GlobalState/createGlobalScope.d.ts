import { Scope } from './Scope';
import React from 'react';
export declare type TScopeByKey = Map<string, Scope>;
export declare const createGlobalScope: (scope: Scope) => React.NamedExoticComponent<{
    children?: React.ReactNode;
}>;
