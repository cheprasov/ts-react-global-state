import React, { useContext, Context, useState, Dispatch, SetStateAction, createElement } from 'react';
import { stringify } from '../string/stringify';
import { Tree } from '@cheprasov/data-structures';
import ComponentWrapper from '../ComponentsWrapper/ComponentWrapper';

export type StateValueType<T> = T | (() => T);
export type SetStateType<T> = Dispatch<SetStateAction<T>>
export type StateTupleType<T> = [T, SetStateType<T>];
export type GlobalStateType<T>= { [P in keyof T]: [T[P], SetStateType<T[P]>] }

export interface ScopeVariablesInf {
    [key: string]: StateTupleType<any> | ScopeVariablesInf;
}

export interface ScopeInf {
    $$_scopeType: 'scope';
}

export const createStateDefiner = (obj: Record<string, any>) => {
    const body: string[] = [`var n = {};`];
    for (const key in obj) {
        if (!obj.hasOwnProperty(key)) {
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

export const contextByName = new Map<string, Context<any>>();

export const createGlobalState = (
    name: string,
    scope: Record<string, StateValueType<any>>,
    useScope: Record<string, string> = {},
) => {
    // console.log('createGlobalState', name, scope, useScope);
    if (contextByName.has(name)) {
        throw new Error(`GlobalState scope '${name}' already exists`)
    }
    const initScope = { ...scope };
    const initUseScope = Object.entries(useScope);
    initUseScope.forEach(([key]) => {
        delete initScope[key];
    });

    const Context = React.createContext(initScope);
    contextByName.set(name, Context);

    const stateDefiner = createStateDefiner(initScope);

    const ContextNode: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
        const scopeValues: ScopeVariablesInf = stateDefiner(initScope, useState);
        initUseScope.forEach(([key, scopeName]) => {
            scopeValues[key] = useGlobalState(scopeName);
        });
        return (
            <Context.Provider value={scopeValues}>
                {children}
            </Context.Provider>
        );
    };

    return React.memo(ContextNode);
};

interface MultiStope {
    [key: string]: any | MultiStope;
}

interface ScopeNode {
    $$_scopeType: string;
    name: string;
    scope: MultiStope;
    parent: ScopeNode | null;
    useScopes: Record<string, string>;
}

const isScopeNode = (node: ScopeNode | MultiStope): node is ScopeNode => {
    return node.$$_scopeType === 'scope';
}

export const createMultiGlobalStates = (scopes: MultiStope) => {
    const linerScopes = Tree.levelOrderTreeTraversal<MultiStope | ScopeNode, any[]>(
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
                if (!scope.hasOwnProperty(key) || typeof(scope[key]) !== 'object' || !scope[key] || Array.isArray(scope[key])) {
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
        (result, node: MultiStope | ScopeNode) => {
            if (node.$$_scopeType === 'scope') {
                result.push(node);
            }
            return result;
        },
        [],
    );

    const globalScopes = linerScopes.reverse().map((scopeNode: ScopeNode) => {
        return createGlobalState(scopeNode.name, scopeNode.scope, scopeNode.useScopes);
    });

    console.log('contextByName', contextByName);

    // //@ts-ignore
    // return (({children}) => (<div>{children}</div>));

    const ContextNode: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
        return (
            <ComponentWrapper components={globalScopes}>
                {children}
            </ComponentWrapper>
        );
    };

    return React.memo(ContextNode);
};

type ReturnUseGlobalState<T extends {}> = {
    [P in keyof Omit<T, '$$_scopeType'>]:
        T[P] extends ScopeInf
            ? ReturnUseGlobalState<Omit<T[P], '$$_scopeType'>>
            : [T[P], SetStateType<T[P]>]
};

export const useGlobalState = <T extends Record<string, any>>
(name: string): ReturnUseGlobalState<T> => {
// export const useGlobalState = <T extends Record<string, any>>
// (name: string): {
//     [P in keyof T]:
//     T[P] extends ScopeInf
//         ? { [K in keyof T[P]]: [T[P][K], SetStateType<T[P][K]>] }
//         : [T[P], SetStateType<T[P]>]
// } => {
    const Context = contextByName.get(name) as Context<T> | undefined;
    if (!Context) {
        throw new Error(`GlobalState scope '${name}' is not exist`)
    }
    return useContext(Context);
};

export const withGlobalState = <P extends object>
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
    `).bind(null, useGlobalState, createElement, Component, { ...scopeToProp });
}