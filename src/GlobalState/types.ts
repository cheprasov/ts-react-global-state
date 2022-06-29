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
    isGlobalState: true;
    stateValue: T;
    setStateValue: SetStateType<T>;
};

export type ReducerTupleExtendedType<T, D> = ReducerTupleType<T, D> & {
    isGlobalReducer: true;
    stateValue: T;
    setStateValue: React.Dispatch<D>;
    dispatchStateValue: React.Dispatch<D>;
};

export const isStateTupleExtendedType = <T>(value: any | StateTupleExtendedType<T>): value is StateTupleExtendedType<T> => {
    return Array.isArray(value) && value.length === 2 && 'isGlobalState' in value;
}
