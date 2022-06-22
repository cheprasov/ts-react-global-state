import React, {
    useContext,
    Context,
    useState,
    Dispatch,
    SetStateAction,
    createElement,
    useReducer,
} from 'react';
import { stringify } from '../string/stringify';
import { Tree } from '@cheprasov/data-structures';
import ComponentWrapper from '../ComponentsWrapper/ComponentWrapper';
import { GlobalScope, isGlobalScope, Scope } from './Scope';
import { isFunction } from '../variables/isFunction';
import { GlobalReducer, isGlobalReducer } from './Reducer';

export type StateValueType<T> = T | (() => T);
export type SetStateType<T> = Dispatch<SetStateAction<T>>
export type StateTupleType<T> = [T, SetStateType<T> | undefined];
export type GlobalScopeType<T> = { [P in keyof T]: [T[P], SetStateType<T[P]>] };
export type ReducerTupleType<T, D> =[T, React.Dispatch<D> | undefined];

export interface ScopeVariablesInf {
    [key: string]: StateTupleType<any> | ScopeVariablesInf;
}

export const createStateDefiner = (obj: Record<string, any>) => {
    const body: string[] = [`var n = {};`];
    for (const key in obj) {
        if (!obj.hasOwnProperty(key) || key === '$$_scopeType') {
            continue;
        }
        const k = stringify(key);
        body.push(`n[${k}] = u(o[${k}]);`);
    }
    body.push('return n;');
    return new Function('o', 'u', body.join('\n')) as (
        (obj: Record<string, any>, use: typeof useState) => Record<string, StateTupleType<any>>
    );
}

export const contextByStateName = new Map<string, Context<any>>();

export const createGlobalState = <S,>(name: string, initialState: S | (() => S)) => {
    if (contextByStateName.has(name)) {
        throw new Error(`GlobalState '${name}' already exists`)
    }

    const init = isFunction(initialState) ? initialState() : initialState;

    const Context = React.createContext<StateTupleType<S>>([init, undefined]);
    contextByStateName.set(name, Context);

    const ContextNode: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
        const state = useState(initialState);
        return (
            <Context.Provider value={state}>
                {children}
            </Context.Provider>
        );
    };

    return React.memo(ContextNode);
};

export const useGlobalState = <T,>(name: string): StateTupleType<T> => {
    const Context = contextByStateName.get(name) as Context<StateTupleType<T>> | undefined;
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

    const Context = React.createContext<ReducerTupleType<any, any>>([init, undefined]);
    contextByReducerName.set(name, Context);

    const ContextNode: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
        const state = useReducer(reducer, initialState);
        return (
            <Context.Provider value={state}>
                {children}
            </Context.Provider>
        );
    };

    return React.memo(ContextNode);
};

export const useGlobalReducer = <T,D>(name: string): ReducerTupleType<T, D> => {
    const Context = contextByReducerName.get(name) as Context<ReducerTupleType<T, D>> | undefined;
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
        acc[key] = [value, undefined];
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
    data: GlobalScope | GlobalReducer;
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
            let scopeOrReducer;
            const isItNode = isNode(node);
            if (isItNode) {
                scopeOrReducer = node.data;
            } else {
                scopeOrReducer = node;
            }

            for (const key in scopeOrReducer) {
                if (!scopeOrReducer.hasOwnProperty(key)) {
                    continue;
                }
                if (isGlobalScope(scopeOrReducer[key])) {
                    children.push({
                        $$__nodeType: 'scope',
                        name: key,
                        data: scopeOrReducer[key].scope,
                        parent: isItNode ? node : null,
                        useScopes: {},
                        useReducer: {},
                    });
                    if (isItNode) {
                        node.useScopes[key] = key;
                    }
                }
                if (isGlobalReducer(scopeOrReducer[key])) {
                    children.push({
                        $$__nodeType: 'reducer',
                        name: key,
                        data: scopeOrReducer[key],
                        parent: isItNode ? node : null,
                        useScopes: {},
                        useReducer: {},
                    });
                    if (isItNode) {
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
            const globalReducer = scopeNode.data as GlobalReducer;
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


// type ReturnUseGlobalScope<T extends {}> = {
//     [P in keyof T]:
//         T[P] extends Scope<any>
//             ? ReturnUseGlobalScope<T[P]>
//             : [T[P], SetStateType<T[P]>]
// };

type ReturnUseGlobalScope<T> = {
    [P in keyof T]:
        T[P] extends GlobalScope
            ? ReturnUseGlobalScope<T[P]> & Scope
            : [T[P], SetStateType<T[P]>]
};

export const useGlobalScope = <T extends Record<string, any>>
(name: string): ReturnUseGlobalScope<T> & Scope => {
    const Context = contextByScopeName.get(name) as Context<T & Scope> | undefined;
    if (!Context) {
        throw new Error(`GlobalState scope '${name}' is not exist`)
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