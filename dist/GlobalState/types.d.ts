import type { Dispatch, SetStateAction } from 'react';
export declare type StateValueType<T> = T | (() => T);
export declare type SetStateType<T> = Dispatch<SetStateAction<T>>;
export declare type StateTupleType<T> = [T, SetStateType<T>];
export declare type ScopeStatesType<T> = {
    [P in keyof T]: [T[P], SetStateType<T[P]>];
};
export declare type ReducerTupleType<T, D> = [T, React.Dispatch<D>];
export declare type OpenPropsType<T extends Record<string, any>> = {
    [P in keyof T]: T[P];
};
export declare type StateTupleExtenderType<T> = {
    isStateTuple: true;
    stateValue: T;
    setStateValue: SetStateType<T>;
} & StateTupleType<T>;
export declare const isStateTupleExtenderType: <T>(value: any) => value is StateTupleExtenderType<T>;
