import type { Dispatch, SetStateAction } from 'react';

export type StateValueType<T> = T | (() => T);
export type SetStateType<T> = Dispatch<SetStateAction<T>>
export type StateTupleType<T> = [T, SetStateType<T> | undefined];
export type ScopeStatesType<T> = { [P in keyof T]: [T[P], SetStateType<T[P]> | undefined] };
export type ReducerTupleType<T, D> =[T, React.Dispatch<D> | undefined];

export type OpenPropsType<T extends Record<string, any>> = {
    [P in keyof T]: T[P]
};