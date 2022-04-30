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
        throw new Error(`GlobalState scope '${name}' already exists`)
    }
    const Context = React.createContext(scope);
    contextByName.set(name, Context);

    const stateMap = stateMapByName.get(name) || new Map<string, StateTuple<any>>();
    if (!stateMapByName.has(name)) {
        stateMapByName.set(name, stateMap);
    }

    const stateDefiner = createStateDefinerHack(scope);

    const ContextNode: React.FunctionComponent<{children: React.ReactNode}> = React.memo(({ children }) => {
        const scopeValues: Record<string, any> = {};
        stateDefiner(scope, stateMap, useState);
        stateMap.forEach((valueWithSet, key) => {
            scopeValues[key] = valueWithSet as StateTuple<any>;
        });

        return (
            <Context.Provider value={scopeValues}>
                {children}
            </Context.Provider>
        );
    });

    return ContextNode;
};

export const useGlobalState = <T extends Record<string, any>>
(name: string): { [P in keyof T]: [T[P], SetStateType<T[P]>] } => {
    const Context = contextByName.get(name) as Context<T> | undefined;
    if (!Context) {
        throw new Error(`GlobalState scope '${name}' is not exist`)
    }
    return useContext(Context);
};
