import React, { useContext, Context, useState, Dispatch, SetStateAction } from 'react';

export type StateValueType<T> = T | (() => T);
export type SetStateType<T> = Dispatch<SetStateAction<T>>
export type StateTuple<T> = [T, SetStateType<T>];

export const createStateDefiner = (obj: Record<string, any>) => {
    const body: string[] = [`var n = {};`];
    for (const key in obj) {
        if (!obj.hasOwnProperty(key)) {
            continue;
        }
        const k = JSON.stringify(key);
        body.push(`n[${k}] = u(o[${k}]);`);
    }
    body.push('return n;');
    return new Function('o', 'u', body.join('\n')) as (
        (obj: Record<string, any>, use: typeof useState) => Record<string, StateTuple<any>>
    );
}

const contextByName = new Map<string, Context<any>>();

export const createGlobalState = (name: string, scope: Record<string, StateValueType<any>>) => {
    if (contextByName.has(name)) {
        throw new Error(`GlobalState scope '${name}' already exists`)
    }
    const Context = React.createContext(scope);
    contextByName.set(name, Context);

    const stateDefiner = createStateDefiner(scope);

    const ContextNode: React.FunctionComponent<{children: React.ReactNode}> = React.memo(({ children }) => {
        const scopeValues = stateDefiner(scope, useState);
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
