import React, { useState, Dispatch, SetStateAction } from 'react';
export declare type StateValueType<T> = T | (() => T);
export declare type SetStateType<T> = Dispatch<SetStateAction<T>>;
export declare type StateTupleType<T> = [T, SetStateType<T>];
export declare type GlobalStateType<T> = {
    [P in keyof T]: [T[P], SetStateType<T[P]>];
};
export declare const createStateDefiner: (obj: Record<string, any>) => (obj: Record<string, any>, use: typeof useState) => Record<string, StateTupleType<any>>;
export declare const contextByName: Map<string, React.Context<any>>;
export declare const createGlobalState: (name: string, scope: Record<string, StateValueType<any>>) => React.NamedExoticComponent<{
    children?: React.ReactNode;
}>;
export declare const useGlobalState: <T extends Record<string, any>>(name: string) => { [P in keyof T]: [T[P], SetStateType<T[P]>]; };
export declare const withGlobalState: (Component: React.ComponentProps<any>, name: string, propName?: string) => any;
