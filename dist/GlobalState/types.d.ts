import type { Dispatch, SetStateAction } from 'react';
export declare type StateValueType<T> = T | (() => T);
export declare type SetStateType<T> = Dispatch<SetStateAction<T>>;
export declare type StateTupleType<T> = [T, SetStateType<T> | undefined];
export declare type ScopeStatesType<T> = {
    [P in keyof T]: [T[P], SetStateType<T[P]> | undefined];
};
export declare type ReducerTupleType<T, D> = [T, React.Dispatch<D> | undefined];
export declare type OpenPropsType<T extends Record<string, any>> = {
    [P in keyof T]: T[P];
};
