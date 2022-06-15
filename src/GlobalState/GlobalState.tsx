import React, { useContext, Context, useState, Dispatch, SetStateAction, createElement } from 'react';
import { stringify } from '../string/stringify';
import { Tree } from '@cheprasov/data-structures';
import ComponentWrapper from '../ComponentsWrapper/ComponentWrapper';
import { isScope, ScopeInf } from './Scope';
import { isFunction } from '../variables/isFunction';

export type StateValueType<T> = T | (() => T);
export type SetStateType<T> = Dispatch<SetStateAction<T>>
export type StateTupleType<T> = [T, SetStateType<T> | undefined];
export type GlobalScopeType<T>= { [P in keyof T]: [T[P], SetStateType<T[P]>] }

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
        throw new Error(`GlobalState '${name}' is not exist`);
    }
    return useContext(Context);
};

export const contextByScopeName = new Map<string, Context<any>>();

export const createGlobalScope = (
    name: string,
    scope: Record<string, StateValueType<any>>,
    useScope: Record<string, string> = {},
) => {
    if (contextByScopeName.has(name)) {
        throw new Error(`GlobalState scope '${name}' already exists`)
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

    const Context = React.createContext(initScope);
    contextByScopeName.set(name, Context);

    const stateDefiner = createStateDefiner(scopeCopy);

    const ContextNode: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
        const scopeValues: ScopeVariablesInf = stateDefiner(scopeCopy, useState);
        initUseScope.forEach(([key, scopeName]) => {
            scopeValues[key] = useGlobalScope(scopeName);
        });
        return (
            <Context.Provider value={scopeValues}>
                {children}
            </Context.Provider>
        );
    };

    return React.memo(ContextNode);
};

interface MultiScope {
    [key: string]: any | MultiScope & ScopeInf;
}

interface ScopeNode {
    $$_scopeType: string;
    name: string;
    scope: MultiScope;
    parent: ScopeNode | null;
    useScopes: Record<string, string>;
}

const isScopeNode = (node: ScopeNode | MultiScope): node is ScopeNode => {
    return node.$$_scopeType === 'scope';
}

export const createMultiGlobalScopes = (scopes: MultiScope) => {
    const linerScopes = Tree.levelOrderTreeTraversal<MultiScope | ScopeNode, any[]>(
        scopes,
        (node) => {
            const children: ScopeNode[] = [];
            let scope;
            if (isScopeNode(node)) {
                scope = node.scope;
            } else {
                scope = node;
            }
            for (const key in scope) {
                if (!scope.hasOwnProperty(key)) {
                    continue;
                }
                if (!isScope(scope[key])) {
                    continue;
                }
                children.push({
                    $$_scopeType: 'scope',
                    name: key,
                    scope: scope[key],
                    parent: isScopeNode(node) ? node : null,
                    useScopes: {},
                });
                if (isScopeNode(node)) {
                    node.useScopes[key] = key;
                }
            }
            return children;
        },
        (result, node: MultiScope | ScopeNode) => {
            if (isScopeNode(node)) {
                result.push(node);
            }
            return result;
        },
        [],
    );

    const globalScopes = linerScopes.reverse().map((scopeNode: ScopeNode) => {
        return createGlobalScope(scopeNode.name, scopeNode.scope, scopeNode.useScopes);
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

type ReturnUseGlobalScope<T extends {}> = {
    [P in keyof Omit<T, '$$_scopeType'>]:
        T[P] extends ScopeInf
            ? ReturnUseGlobalScope<Omit<T[P], '$$_scopeType'>>
            : [T[P], SetStateType<T[P]>]
};

export const useGlobalScope = <T extends Record<string, any>>
(name: string): ReturnUseGlobalScope<T> => {
    const Context = contextByScopeName.get(name) as Context<T> | undefined;
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