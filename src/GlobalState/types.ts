import type { Dispatch, SetStateAction } from 'react';

export type StateValueType<T> = T | (() => T);
export type SetStateType<T> = Dispatch<SetStateAction<T>>
export type StateTupleType<T> = [T, SetStateType<T>];
export type ScopeStatesType<T> = { [P in keyof T]: [T[P], SetStateType<T[P]>] };
export type ReducerTupleType<T, D> = [T, React.Dispatch<D>];

export type OpenPropsType<T extends Record<string, any>> = {
    [P in keyof T]: T[P]
};

export type StateTupleExtenderType<T> = {
    isStateTuple: true;
    stateValue: T;
    setStateValue: SetStateType<T>;
} & StateTupleType<T>;

export const isStateTupleExtenderType = <T>(value: any | StateTupleExtenderType<T>): value is StateTupleExtenderType<T> => {
    return Array.isArray(value) && value.length === 2 && 'isStateTuple' in value;
}
