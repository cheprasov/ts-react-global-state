import type { Context, Dispatch, SetStateAction } from 'react';
import { Scope } from './Scope';
export type TStateValue<T> = T | (() => T);
export type TSetStateAction<T> = SetStateAction<T>;
export type TSetState<T> = Dispatch<TSetStateAction<T>>;
export type TStateTuple<T> = [T, TSetState<T>];
export type TScopeStates<T> = {
    [P in keyof T]: [T[P], TSetState<T[P]>];
};
export type TStateTupleExtended<T> = TStateTuple<T> & {
    value: T;
    setValue: TSetState<T>;
};
export type TContextByScopeOrName = Map<Scope | string, Context<any>>;
export interface IScopeVariables {
    [key: string]: TStateTupleExtended<any> | IScopeVariables;
}
export type TScope = {
    $$__global_scope_type: 'Scope';
};
export type TExtractScope<T> = T extends Scope<infer TData> ? {
    [K in keyof TData]: TExtractScope<TData[K]>;
} & TScope : T;
