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
export declare type StateTupleExtendedType<T> = StateTupleType<T> & {
    globalState: true;
    stateValue: T;
    setStateValue: SetStateType<T>;
};
export declare const isStateTupleExtendedType: <T>(value: any) => value is StateTupleExtendedType<T>;
export declare type ReducerTupleExtendedType<T, D> = ReducerTupleType<T, D> & {
    globalReducer: true;
    stateValue: T;
    setStateValue: React.Dispatch<D>;
    dispatchStateValue: React.Dispatch<D>;
};
export declare const isReducerTupleExtendedType: <T, D>(value: any) => value is ReducerTupleExtendedType<T, D>;
