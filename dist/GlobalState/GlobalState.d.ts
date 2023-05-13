import React, { Context, useState } from 'react';
import { GlobalScope } from './GlobalScope';
import { Scope } from './Scope';
import type { ReducerTupleExtendedType, StateTupleExtendedType } from './types';
export interface ScopeVariablesInf {
    [key: string]: StateTupleExtendedType<any> | ReducerTupleExtendedType<any, any> | ScopeVariablesInf;
}
export declare type ContextByNameType = Map<string, Context<any>>;
export declare const GlobalScopeContextByName: React.Context<ContextByNameType>;
export declare const createStateDefiner: (obj: Record<string, any>) => (obj: Record<string, any>, use: typeof useState) => Record<string, StateTupleExtendedType<any>>;
export declare const useGlobalReducer: <T, D>(name: string) => ReducerTupleExtendedType<T, D>;
interface MultiScope {
    [key: string]: any | MultiScope & typeof GlobalScope;
}
export declare const createGlobalStates: (scopes: MultiScope, contextByName: ContextByNameType) => React.NamedExoticComponent<{
    children?: React.ReactNode;
}>;
export declare const useGlobalScope: <T extends Record<string, any>>(name: string) => Scope<T>;
export declare const withGlobalScope: <P extends object>(Component: React.ComponentType<P>, scopeToProp: Record<string, string>) => React.FC<P>;
export {};
