import type { Dispatch, SetStateAction } from 'react';
export declare type StateValueType<T> = T | (() => T);
export declare type SetStateType<T> = Dispatch<SetStateAction<T>>;
export declare type StateTupleType<T> = [T, SetStateType<T> | undefined];
export declare type GlobalScopeType<T> = {
    [P in keyof T]: [T[P], SetStateType<T[P]>];
};
export declare type ReducerTupleType<T, D> = [T, React.Dispatch<D> | undefined];
