import type { Context, Dispatch, SetStateAction } from 'react';
import { Scope } from './Scope';

export type TStateValue<T> = T | (() => T);
export type TSetState<T> = Dispatch<SetStateAction<T>>
export type TStateTuple<T> = [T, TSetState<T>];
export type TScopeStates<T> = { [P in keyof T]: [T[P], TSetState<T[P]>] };
//export type TReducerTuple<T, D> = [T, React.Dispatch<D>];

// export type OpenPropsType<T extends Record<string, any>> = {
//     [P in keyof T]: T[P]
// };

export type TStateTupleExtended<T> = TStateTuple<T> & {
    value: T;
    setValue: TSetState<T>;
};

export type TContextByScopeOrName = Map<Scope | string, Context<any>>;

export interface IScopeVariables {
    [key: string]: TStateTupleExtended<any> | IScopeVariables;
}