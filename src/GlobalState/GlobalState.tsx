import React, {
    useContext,
    Context,
    useState,
    createElement,
    useReducer,
} from 'react';
import { stringify } from '../string/stringify';
import { Tree } from '@cheprasov/data-structures';
import ComponentWrapper from '../ComponentsWrapper/ComponentWrapper';
import { GlobalScope, isGlobalScope } from './GlobalScope';
import { Scope } from './Scope';
import { isFunction } from '../variables/isFunction';
import { GlobalReducer, isGlobalReducer } from './GlobalReducer';

import type { ReducerTupleExtendedType, StateTupleExtendedType, ReducerTupleType, SetStateType, StateTupleType, StateValueType } from './types';

export interface ScopeVariablesInf {
    [key: string]: StateTupleExtendedType<any> | ReducerTupleExtendedType<any, any> | ScopeVariablesInf;
}

export const createStateDefiner = (obj: Record<string, any>) => {
    const body: string[] = [`var n = {};`];
    for (const key in obj) {
        if (!obj.hasOwnProperty(key) || key === '$$_scopeType') {
            continue;
        }
        const k = stringify(key);
        body.push(`n[${k}] = u(o[${k}]);`);
        body.push(`n[${k}].stateValue = n[${k}][0];`);
        body.push(`n[${k}].setStateValue = n[${k}][1];`);
        body.push(`n[${k}].globalState = true;`);
    }
    body.push('return n;');
    return new Function('o', 'u', body.join('\n')) as (
        (obj: Record<string, any>, use: typeof useState) => Record<string, StateTupleExtendedType<any>>
    );
}

export const contextByStateName = new Map<string, Context<any>>();

export const createGlobalState = <S,>(name: string, initialState: S | (() => S)) => {
    if (contextByStateName.has(name)) {
        throw new Error(`Global State '${name}' already exists`)
    }

    const init = isFunction(initialState) ? initialState() : initialState;

    const Context = React.createContext<StateTupleType<S>>([init, () => {}]);
    contextByStateName.set(name, Context);

    const ContextNode: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
        const state = useState(initialState);
        type StateTuple = StateTupleExtendedType<typeof state[0]>;
        (state as StateTuple).globalState = true;
        (state as StateTuple).stateValue = state[0];
        (state as StateTuple).setStateValue = state[1];

        return (
            <Context.Provider value={state}>
                {children}
            </Context.Provider>
        );
    };

    return React.memo(ContextNode);
};

export const useGlobalState = <T,>(name: string): StateTupleExtendedType<T> => {
    const Context = contextByStateName.get(name) as Context<StateTupleExtendedType<T>> | undefined;
    if (!Context) {
        throw new Error(`Global State '${name}' is not exist`);
    }
    return useContext(Context);
};

export const contextByReducerName = new Map<string, Context<any>>();

export const createGlobalReducer = (
    name: string,
    reducer: React.Reducer<any, any>,
    initialState: any,
    initializer?: (init: any) => any,
) => {
    if (contextByReducerName.has(name)) {
        throw new Error(`Global Reducer '${name}' already exists`)
    }

    const init = isFunction(initializer) ? initializer(initialState) : initialState;

    const Context = React.createContext<ReducerTupleType<any, any>>([init, () => {}]);
    contextByReducerName.set(name, Context);

    const ContextNode: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
        const stateTuple = useReducer(reducer, initialState);
        type StateTuple = ReducerTupleExtendedType<typeof stateTuple[0], typeof stateTuple[1]>;
        (stateTuple as StateTuple).globalReducer = true;
        (stateTuple as StateTuple).stateValue = stateTuple[0];
        (stateTuple as StateTuple).setStateValue = stateTuple[1];
        (stateTuple as StateTuple).dispatchStateValue = stateTuple[1];

        return (
            <Context.Provider value={stateTuple}>
                {children}
            </Context.Provider>
        );
    };

    return React.memo(ContextNode);
};

export const useGlobalReducer = <T,D>(name: string): ReducerTupleExtendedType<T, D> => {
    const Context = contextByReducerName.get(name) as Context<ReducerTupleExtendedType<T, D>> | undefined;
    if (!Context) {
        throw new Error(`Global Reducer '${name}' is not exist`);
    }
    return useContext(Context);
};

export const contextByScopeName = new Map<string, Context<any>>();

export const createGlobalScope = (
    name: string,
    scope: Record<string, StateValueType<any>>,
    useScope: Record<string, string> = {},
    useReducer: Record<string, string> = {},
) => {
    if (contextByScopeName.has(name)) {
        throw new Error(`Global Scope '${name}' already exists`)
    }

    const scopeCopy = { ...scope };

    const initScope = Object.entries(scopeCopy).reduce((acc, [key, value]) => {
        acc[key] = [value, () => {}];
        return acc;
    }, {} as Record<string, any>);

    const initUseScope = Object.entries(useScope);
    initUseScope.forEach(([key]) => {
        delete scopeCopy[key];
        delete initScope[key];
    });

    const initUseReducer = Object.entries(useReducer);
    initUseReducer.forEach(([key]) => {
        delete scopeCopy[key];
        delete initScope[key];
    });

    const Context = React.createContext(initScope);
    contextByScopeName.set(name, Context);

    const stateDefiner = createStateDefiner(scopeCopy);

    const ContextNode: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
        const scopeValues: ScopeVariablesInf = stateDefiner(scopeCopy, useState);
        initUseScope.forEach(([key, scopeName]) => {
            scopeValues[key] = useGlobalScope(scopeName);
        });
        initUseReducer.forEach(([key, scopeName]) => {
            scopeValues[key] = useGlobalReducer(scopeName);
        });
        return (
            <Context.Provider value={new Scope(scopeValues)}>
                {children}
            </Context.Provider>
        );
    };

    return React.memo(ContextNode);
};

interface MultiScope {
    [key: string]: any | MultiScope & typeof GlobalScope;
}

interface Node {
    $$__nodeType: 'scope' | 'reducer';
    name: string;
    data: Record<string, any> | GlobalReducer<any>;
    parent: Node | null;
    useScopes: Record<string, string>;
    useReducer: Record<string, string>;
}

const isNode = (node: any): node is Node => {
    return node.$$__nodeType === 'scope' || node.$$__nodeType === 'reducer';
}

export const createMultiGlobalScopes = (scopes: MultiScope) => {
    const linerScopes = Tree.levelOrderTreeTraversal<MultiScope | Node, any[]>(
        scopes,
        (node) => {
            const children: Node[] = [];
            let obj;
            const is_node = isNode(node);
            if (is_node) {
                obj = node.data;
            } else {
                obj = node;
            }

            if (isGlobalReducer(obj)) {
                return children;
            }

            for (const key in obj) {
                if (!obj.hasOwnProperty(key)) {
                    continue;
                }
                const gblObj = obj[key];
                if (isGlobalScope(gblObj)) {
                    children.push({
                        $$__nodeType: 'scope',
                        name: key,
                        data: gblObj,
                        parent: is_node ? node : null,
                        useScopes: {},
                        useReducer: {},
                    });
                    if (is_node) {
                        node.useScopes[key] = key;
                    }
                } else if (isGlobalReducer(gblObj)) {
                    children.push({
                        $$__nodeType: 'reducer',
                        name: key,
                        data: gblObj,
                        parent: is_node ? node : null,
                        useScopes: {},
                        useReducer: {},
                    });
                    if (is_node) {
                        node.useReducer[key] = key;
                    }
                }
            }
            return children;
        },
        (result, node: MultiScope | Node) => {
            if (isNode(node)) {
                result.push(node);
            }
            return result;
        },
        [],
    );

    const globalScopes = linerScopes.reverse().map((scopeNode: Node) => {
        if (scopeNode.$$__nodeType === 'scope') {
            return createGlobalScope(scopeNode.name, scopeNode.data, scopeNode.useScopes, scopeNode.useReducer);
        }
        if (scopeNode.$$__nodeType === 'reducer' && isGlobalReducer(scopeNode.data)) {
            const globalReducer = scopeNode.data as GlobalReducer<any>;
            return createGlobalReducer(scopeNode.name, globalReducer.reducer, globalReducer.initialState, globalReducer.initializer);
        }
        return ({ children }: any) => children;
    });

    const ContextNode: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
        return (
            <ComponentWrapper components={globalScopes}>
                {children}
            </ComponentWrapper>
        );
    };

    return React.memo(ContextNode);
};



type GetObjectKeys<T> = {
    [K in keyof T]: T[K];
};

// type ReturnUseGlobalScope<T extends {}> = {
//     [P in keyof GetObjectKeys<T>]:
//         T[P] extends GlobalScope<any>
//             ? Scope & ReturnUseGlobalScope<GetObjectKeys<T[P]>>
//             : [T[P], SetStateType<T[P]>] & SetValueExtender<T[P]>
// };

export const useGlobalScope = <T extends Record<string, any>>(name: string): Scope<T> => {
    const Context = contextByScopeName.get(name) as Context<T & Scope<T>> | undefined;
    if (!Context) {
        throw new Error(`Global Scope '${name}' is not exist`)
    }
    return useContext(Context);
};

export const withGlobalScope = <P extends object>
(Component: React.ComponentType<P>, scopeToProp: Record<string, string>): React.FC<P> => {
    return new Function('u', 'c', 'C', 's', 'p', `
        var o = {};
        for (let k in s) {
            if (!s.hasOwnProperty(k)) {
                continue;
            }
            o[s[k]] = u(k);
        }
        var n = Object.assign(o, p);
        delete n.children;
        return c(C, n, p.children);
    `).bind(null, useGlobalScope, createElement, Component, { ...scopeToProp });
}