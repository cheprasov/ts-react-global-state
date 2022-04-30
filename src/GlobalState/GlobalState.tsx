import React, { useContext, Context, useState, Dispatch, SetStateAction } from 'react';

export type StateValueType<T> = T | (() => T);
export type SetStateType<T> = Dispatch<SetStateAction<T>>
export type StateTuple<T> = [T, SetStateType<T>];

// React Dev Tool Error workaround
const createStateDefinerHack = (obj: Record<string, any>) => {
    const body: string[] = [];
    for (const key in obj) {
        if (!obj.hasOwnProperty(key)) {
            continue;
        }
        const k = JSON.stringify(key);
        body.push(`m.set(${k},u(o[${k}]));`);
    }
    return new Function('o', 'm', 'u', body.join('\n'));
}

const contextByName = new Map<string, Context<any>>();
const stateMapByName = new Map<string, Map<string, StateTuple<any>>>();

export const createGlobalState = (name: string, scope: Record<string, StateValueType<any>>) => {
    if (contextByName.has(name)) {
        throw new Error(`GlobalState scope '${name}'already exists`)
    }
    const Context = React.createContext(scope);
    contextByName.set(name, Context);

    const stateMap = stateMapByName.get(name) || new Map<string, StateTuple<any>>();
    if (!stateMapByName.has(name)) {
        stateMapByName.set(name, stateMap);
    }

    const stateDefiner = createStateDefinerHack(scope);

    const ContextNode: React.FunctionComponent<{children: React.ReactNode}> = ({ children }) => {
        stateDefiner(scope, stateMap, useState);
        const scopeValues: Record<string, any> = {};
        stateMap.forEach((value, key) => {
            scopeValues[key] = value;
        });

        return (
            <Context.Provider value={scopeValues}>
                {children}
            </Context.Provider>
        );
    }

    return ContextNode;
};

// Yes, I know, but I did not find how to define proper type for the function. Please feel free to help me if you have an idea.
export function useGlobalState<T extends Record<string, any> = Record<string, any>>(name: string): T;
export function useGlobalState<T1 = any>(name: string, k1: string): [T1, SetStateType<T1>];
export function useGlobalState<T1 = any, T2 = any>(name: string, k1: string, k2: string): [T1, SetStateType<T1>, T2, SetStateType<T2>];
export function useGlobalState<T1 = any, T2 = any, T3 = any>(name: string, k1: string, k2: string, k3: string): [T1, SetStateType<T1>, T2, SetStateType<T2>, T3, SetStateType<T3>];
export function useGlobalState<T1 = any, T2 = any, T3 = any, T4 = any>(name: string, k1: string, k2: string, k3: string, k4: string): [T1, SetStateType<T1>, T2, SetStateType<T2>, T3, SetStateType<T3>, T4, SetStateType<T4>];
export function useGlobalState<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any>(name: string, k1: string, k2: string, k3: string, k4: string, k5: string): [T1, SetStateType<T1>, T2, SetStateType<T2>, T3, SetStateType<T3>, T4, SetStateType<T4>, T5, SetStateType<T5>];
export function useGlobalState<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any>(name: string, k1: string, k2: string, k3: string, k4: string, k5: string, k6: string): [T1, SetStateType<T1>, T2, SetStateType<T2>, T3, SetStateType<T3>, T4, SetStateType<T4>, T5, SetStateType<T5>, T6, SetStateType<T6>];
export function useGlobalState<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any>(name: string, k1: string, k2: string, k3: string, k4: string, k5: string, k6: string, k7: string): [T1, SetStateType<T1>, T2, SetStateType<T2>, T3, SetStateType<T3>, T4, SetStateType<T4>, T5, SetStateType<T5>, T6, SetStateType<T6>, T7, SetStateType<T7>];
export function useGlobalState<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any>(name: string, k1: string, k2: string, k3: string, k4: string, k5: string, k6: string, k7: string, k8: string): [T1, SetStateType<T1>, T2, SetStateType<T2>, T3, SetStateType<T3>, T4, SetStateType<T4>, T5, SetStateType<T5>, T6, SetStateType<T6>, T7, SetStateType<T7>, T8, SetStateType<T8>];
export function useGlobalState<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any>(name: string, k1: string, k2: string, k3: string, k4: string, k5: string, k6: string, k7: string, k8: string, k9: string): [T1, SetStateType<T1>, T2, SetStateType<T2>, T3, SetStateType<T3>, T4, SetStateType<T4>, T5, SetStateType<T5>, T6, SetStateType<T6>, T7, SetStateType<T7>, T8, SetStateType<T8>, T9, SetStateType<T9>];
export function useGlobalState<T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any, T9 = any, T10 = any>(name: string, k1: string, k2: string, k3: string, k4: string, k5: string, k6: string, k7: string, k8: string, k9: string, k10: string): [T1, SetStateType<T1>, T2, SetStateType<T2>, T3, SetStateType<T3>, T4, SetStateType<T4>, T5, SetStateType<T5>, T6, SetStateType<T6>, T7, SetStateType<T7>, T8, SetStateType<T8>, T9, SetStateType<T9>, T10, SetStateType<T10>];

export function useGlobalState(name: string, ...keys: string[]): any | any[] {
    const context = useContext(contextByName.get(name) as Context<any>);
    if (keys.length === 0) {
        return context;
    }
    const statusMap = stateMapByName.get(name);
    if (!statusMap) {
        throw new Error(`GlobalState scope '${name}'is not exist`)
    }
    const statuses: any[] = [];
    keys.forEach((key) => {
        const tuple = statusMap.get(key) as StateTuple<any> | undefined;
        if (!tuple) {
            throw new Error(`Key '${key}' not found in GlobalState scope '${name}'`);
        }
        return statuses.push(...tuple);
    });
    return statuses;
}