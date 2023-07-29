import type { Context, Dispatch, SetStateAction } from 'react';
import { Scope } from './Scope';
export declare type TStateValue<T> = T | (() => T);
export declare type TSetStateAction<T> = SetStateAction<T>;
export declare type TSetState<T> = Dispatch<TSetStateAction<T>>;
export declare type TStateTuple<T> = [T, TSetState<T>];
export declare type TScopeStates<T> = {
    [P in keyof T]: [T[P], TSetState<T[P]>];
};
export declare type TStateTupleExtended<T> = TStateTuple<T> & {
    value: T;
    setValue: TSetState<T>;
};
export declare type TContextByScopeOrName = Map<Scope | string, Context<any>>;
export interface IScopeVariables {
    [key: string]: TStateTupleExtended<any> | IScopeVariables;
}
