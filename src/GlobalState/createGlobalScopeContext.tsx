import React, { useState } from 'react';
import { Scope } from './Scope';
import { IScopeVariables, TContextByScopeOrName } from './types';
import { createStateDefiner } from './createStateDefiner';
import { useGlobalScope } from './useGlobalScope';

interface ISubScope {
    scope: Scope;
    key: string;
}

export const createGlobalScopeContext = (
    scope: Scope,
    key: string,
    contextByScopeOrName: TContextByScopeOrName
) => {
    if (contextByScopeOrName.has(scope) || contextByScopeOrName.has(key)) {
        throw new Error(`Scope '${key}' already exists`);
    }

    const scopeData = scope._getData();
    const subScopes: ISubScope[] = [];

    const initScope = Object.entries(scopeData).reduce((acc, [key, value]) => {
        if (value instanceof Scope) {
            subScopes.push({ key, scope: value });
        } else {
            acc[key] = [value, () => {}];
        }
        return acc;
    }, {} as Record<string, any>);

    const Context = React.createContext(initScope);
    contextByScopeOrName.set(scope, Context);
    contextByScopeOrName.set(key, Context);

    const stateDefiner = createStateDefiner(scopeData);

    const ContextNode: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
        const scopeValues: IScopeVariables = stateDefiner(scopeData, useState);
        subScopes.forEach(({ key, scope }) => {
            scopeValues[key] = useGlobalScope(scope);
        });
        return (
            <Context.Provider value={scopeValues}>
                {children}
            </Context.Provider>
        );
    };

    return React.memo(ContextNode);
};