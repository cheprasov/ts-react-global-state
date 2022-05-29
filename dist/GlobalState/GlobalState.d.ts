import React, { useState, Dispatch, SetStateAction } from 'react';
import { ScopeInf } from './Scope';
export declare type StateValueType<T> = T | (() => T);
export declare type SetStateType<T> = Dispatch<SetStateAction<T>>;
export declare type StateTupleType<T> = [T, SetStateType<T> | undefined];
export declare type GlobalStateType<T> = {
    [P in keyof T]: [T[P], SetStateType<T[P]>];
};
export interface ScopeVariablesInf {
    [key: string]: StateTupleType<any> | ScopeVariablesInf;
}
export declare const createStateDefiner: (obj: Record<string, any>) => (obj: Record<string, any>, use: typeof useState) => Record<string, StateTupleType<any>>;
export declare const contextByName: Map<string, React.Context<any>>;
export declare const createGlobalState: (name: string, scope: Record<string, StateValueType<any>>, useScope?: Record<string, string>) => React.NamedExoticComponent<{
    children?: React.ReactNode;
}>;
interface MultiStope {
    [key: string]: any | MultiStope & ScopeInf;
}
export declare const createMultiGlobalStates: (scopes: MultiStope) => React.NamedExoticComponent<{
    children?: React.ReactNode;
}>;
declare type ReturnUseGlobalState<T extends {}> = {
    [P in keyof Omit<T, '$$_scopeType'>]: T[P] extends ScopeInf ? ReturnUseGlobalState<Omit<T[P], '$$_scopeType'>> : [T[P], SetStateType<T[P]>];
};
export declare const useGlobalState: <T extends Record<string, any>>(name: string) => ReturnUseGlobalState<T>;
export declare const withGlobalState: <P extends object>(Component: React.ComponentType<P>, scopeToProp: Record<string, string>) => React.FC<P>;
export {};
