import React, { Dispatch, SetStateAction } from 'react';
export declare type StateValueType<T> = T | (() => T);
export declare type SetStateType<T> = Dispatch<SetStateAction<T>>;
export declare type StateTuple<T> = [T, SetStateType<T>];
export declare const createGlobalState: (name: string, scope: Record<string, StateValueType<any>>) => React.FunctionComponent<{
    children: React.ReactNode;
}>;
export declare const useGlobalState: <T extends Record<string, any>>(name: string) => { [P in keyof T]: [T[P], SetStateType<T[P]>]; };
