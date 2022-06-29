import React, { useState } from 'react';
import { GlobalScope } from './GlobalScope';
import { Scope } from './Scope';
import type { ReducerTupleExtendedType, StateTupleExtendedType, StateTupleType, StateValueType } from './types';
export interface ScopeVariablesInf {
    [key: string]: StateTupleExtendedType<any> | ReducerTupleExtendedType<any, any> | ScopeVariablesInf;
}
export declare const createStateDefiner: (obj: Record<string, any>) => (obj: Record<string, any>, use: typeof useState) => Record<string, StateTupleExtendedType<any>>;
export declare const contextByStateName: Map<string, React.Context<any>>;
export declare const createGlobalState: <S>(name: string, initialState: S | (() => S)) => React.NamedExoticComponent<{
    children?: React.ReactNode;
}>;
export declare const useGlobalState: <T>(name: string) => StateTupleType<T>;
export declare const contextByReducerName: Map<string, React.Context<any>>;
export declare const createGlobalReducer: (name: string, reducer: React.Reducer<any, any>, initialState: any, initializer?: ((init: any) => any) | undefined) => React.NamedExoticComponent<{
    children?: React.ReactNode;
}>;
export declare const useGlobalReducer: <T, D>(name: string) => ReducerTupleExtendedType<T, D>;
export declare const contextByScopeName: Map<string, React.Context<any>>;
export declare const createGlobalScope: (name: string, scope: Record<string, StateValueType<any>>, useScope?: Record<string, string>, useReducer?: Record<string, string>) => React.NamedExoticComponent<{
    children?: React.ReactNode;
}>;
interface MultiScope {
    [key: string]: any | MultiScope & typeof GlobalScope;
}
export declare const createMultiGlobalScopes: (scopes: MultiScope) => React.NamedExoticComponent<{
    children?: React.ReactNode;
}>;
export declare const useGlobalScope: <T extends Record<string, any>>(name: string) => Scope<T>;
export declare const withGlobalScope: <P extends object>(Component: React.ComponentType<P>, scopeToProp: Record<string, string>) => React.FC<P>;
export {};
