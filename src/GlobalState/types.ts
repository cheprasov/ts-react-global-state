import type { Dispatch, SetStateAction } from 'react';

export type StateValueType<T> = T | (() => T);
export type SetStateType<T> = Dispatch<SetStateAction<T>>
export type StateTupleType<T> = [T, SetStateType<T>];
export type ScopeStatesType<T> = { [P in keyof T]: [T[P], SetStateType<T[P]>] };
export type ReducerTupleType<T, D> = [T, React.Dispatch<D>];

export type OpenPropsType<T extends Record<string, any>> = {
    [P in keyof T]: T[P]
};

export type StateTupleExtendedType<T> = StateTupleType<T> & {
    globalState: true;
    stateValue: T;
    setStateValue: SetStateType<T>;
};

export const isStateTupleExtendedType = <T>(value: any | StateTupleExtendedType<T>): value is StateTupleExtendedType<T> => {
    return Array.isArray(value) && value.length === 2 && 'globalState' in value;
}

export type ReducerTupleExtendedType<T, D> = ReducerTupleType<T, D> & {
    globalReducer: true;
    stateValue: T;
    setStateValue: React.Dispatch<D>;
    dispatchStateValue: React.Dispatch<D>;
};


export const isReducerTupleExtendedType = <T, D>(value: any | ReducerTupleExtendedType<T, D>): value is ReducerTupleExtendedType<T, D> => {
    return Array.isArray(value) && value.length === 2 && 'globalReducer' in value;
}