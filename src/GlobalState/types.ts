import type { Dispatch, SetStateAction } from 'react';

export type StateValueType<T> = T | (() => T);
export type SetStateType<T> = Dispatch<SetStateAction<T>>
export type StateTupleType<T> = [T, SetStateType<T> | undefined];
export type GlobalScopeType<T> = { [P in keyof T]: [T[P], SetStateType<T[P]>] };
export type ReducerTupleType<T, D> =[T, React.Dispatch<D> | undefined];