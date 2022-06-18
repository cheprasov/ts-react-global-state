import React, { useState, Dispatch, SetStateAction } from 'react';
import { ScopeInf } from './Scope';
export declare type StateValueType<T> = T | (() => T);
export declare type SetStateType<T> = Dispatch<SetStateAction<T>>;
export declare type StateTupleType<T> = [T, SetStateType<T> | undefined];
export declare type GlobalScopeType<T> = {
    [P in keyof T]: [T[P], SetStateType<T[P]>];
};
export declare type ReducerTupleType<T, D> = [T, React.Dispatch<D> | undefined];
export interface ScopeVariablesInf {
    [key: string]: StateTupleType<any> | ScopeVariablesInf;
}
export declare const createStateDefiner: (obj: Record<string, any>) => (obj: Record<string, any>, use: typeof useState) => Record<string, StateTupleType<any>>;
export declare const contextByStateName: Map<string, React.Context<any>>;
export declare const createGlobalState: <S>(name: string, initialState: S | (() => S)) => React.NamedExoticComponent<{
    children?: React.ReactNode;
}>;
export declare const useGlobalState: <T>(name: string) => StateTupleType<T>;
export declare const contextByReducerName: Map<string, React.Context<any>>;
export declare const createGlobalReducer: (name: string, reducer: React.Reducer<any, any>, initialState: any, initializer?: ((init: any) => any) | undefined) => React.NamedExoticComponent<{
    children?: React.ReactNode;
}>;
export declare const useGlobalReducer: <T, D>(name: string) => ReducerTupleType<T, D>;
export declare const contextByScopeName: Map<string, React.Context<any>>;
export declare const createGlobalScope: (name: string, scope: Record<string, StateValueType<any>>, useScope?: Record<string, string>, useReducer?: Record<string, string>) => React.NamedExoticComponent<{
    children?: React.ReactNode;
}>;
interface MultiScope {
    [key: string]: any | MultiScope & ScopeInf;
}
export declare const createMultiGlobalScopes: (scopes: MultiScope) => React.NamedExoticComponent<{
    children?: React.ReactNode;
}>;
declare type ReturnUseGlobalScope<T extends {}> = {
    [P in keyof Omit<T, '$$_scopeType'>]: T[P] extends ScopeInf ? ReturnUseGlobalScope<Omit<T[P], '$$_scopeType'>> : [T[P], SetStateType<T[P]>];
};
export declare const useGlobalScope: <T extends Record<string, any>>(name: string) => ReturnUseGlobalScope<T>;
export declare const withGlobalScope: <P extends object>(Component: React.ComponentType<P>, scopeToProp: Record<string, string>) => React.FC<P>;
export {};
