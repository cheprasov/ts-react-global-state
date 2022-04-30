import React, { Dispatch, SetStateAction } from 'react';
export declare type StateValueType<T> = T | (() => T);
export declare type SetStateType<T> = Dispatch<SetStateAction<T>>;
export declare type StateTuple<T> = [T, SetStateType<T>];
export declare const createGlobalState: (name: string, scope: Record<string, StateValueType<any>>) => React.FunctionComponent<{
    children: React.ReactNode;
}>;
export declare function useGlobalState<T extends Record<string, any> = Record<string, any>>(name: string): T;
export declare function useGlobalState<T1 = any>(name: string, k1: string): [T1, SetStateType<T1>];
export declare function useGlobalState<T1 = any, T2 = any>(name: string, k1: string, k2: string): [T1, SetStateType<T1>, T2, SetStateType<T2>];
export declare function useGlobalState<T1 = any, T2 = any, T3 = any>(name: string, k1: string, k2: string, k3: string): [T1, SetStateType<T1>, T2, SetStateType<T2>, T3, SetStateType<T3>];
export declare function useGlobalState<T1 = any, T2 = any, T3 = any, T4 = any>(name: string, k1: string, k2: string, k3: string, k4: string): [T1, SetStateType<T1>, T2, SetStateType<T2>, T3, SetStateType<T3>, T4, SetStateType<T4>];
export declare function useGlobalState<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any>(name: string, k1: string, k2: string, k3: string, k4: string, k5: string): [T1, SetStateType<T1>, T2, SetStateType<T2>, T3, SetStateType<T3>, T4, SetStateType<T4>, T5, SetStateType<T5>];
export declare function useGlobalState<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any>(name: string, k1: string, k2: string, k3: string, k4: string, k5: string, k6: string): [T1, SetStateType<T1>, T2, SetStateType<T2>, T3, SetStateType<T3>, T4, SetStateType<T4>, T5, SetStateType<T5>, T6, SetStateType<T6>];
export declare function useGlobalState<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any>(name: string, k1: string, k2: string, k3: string, k4: string, k5: string, k6: string, k7: string): [T1, SetStateType<T1>, T2, SetStateType<T2>, T3, SetStateType<T3>, T4, SetStateType<T4>, T5, SetStateType<T5>, T6, SetStateType<T6>, T7, SetStateType<T7>];
export declare function useGlobalState<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any>(name: string, k1: string, k2: string, k3: string, k4: string, k5: string, k6: string, k7: string, k8: string): [T1, SetStateType<T1>, T2, SetStateType<T2>, T3, SetStateType<T3>, T4, SetStateType<T4>, T5, SetStateType<T5>, T6, SetStateType<T6>, T7, SetStateType<T7>, T8, SetStateType<T8>];
export declare function useGlobalState<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any>(name: string, k1: string, k2: string, k3: string, k4: string, k5: string, k6: string, k7: string, k8: string, k9: string): [T1, SetStateType<T1>, T2, SetStateType<T2>, T3, SetStateType<T3>, T4, SetStateType<T4>, T5, SetStateType<T5>, T6, SetStateType<T6>, T7, SetStateType<T7>, T8, SetStateType<T8>, T9, SetStateType<T9>];
export declare function useGlobalState<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any>(name: string, k1: string, k2: string, k3: string, k4: string, k5: string, k6: string, k7: string, k8: string, k9: string, k10: string): [T1, SetStateType<T1>, T2, SetStateType<T2>, T3, SetStateType<T3>, T4, SetStateType<T4>, T5, SetStateType<T5>, T6, SetStateType<T6>, T7, SetStateType<T7>, T8, SetStateType<T8>, T9, SetStateType<T9>, T10, SetStateType<T10>];
