import React, { useEffect, useState } from 'react';
import { Scope } from './Scope';
import { IScopeVariables, TContextByScopeOrName, TSetState, TStateTuple } from './types';
import { createStateDefiner } from './createStateDefiner';
import { useGlobalScope } from './useGlobalScope';
import { useEffectNoInit } from '../hooks/useEffectNoInit';
import { ScopeVariablesWrapper } from './ScopeVariablesWrapper';
import { Object as O } from '@cheprasov/data-structures';

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
    const depKeys: string[] = [];
    const localKeys: string[] = [];

    const initScope = Object.entries(scopeData).reduce((acc, [key, value]) => {
        depKeys.push(key);
        if (value instanceof Scope) {
            subScopes.push({ key, scope: value });
        } else {
            localKeys.push(key);
            acc[key] = [value, () => {}];
        }
        return acc;
    }, {} as Record<string, any>);

    const Context = React.createContext(initScope);
    contextByScopeOrName.set(scope, Context);
    contextByScopeOrName.set(key, Context);

    const stateDefiner = createStateDefiner(scopeData);

    const ContextNode: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
        const scopeValueByKey: IScopeVariables = stateDefiner(scopeData, useState);

        subScopes.forEach(({ key, scope }) => {
            scopeValueByKey[key] = useGlobalScope(scope);
        });

        const depValues = depKeys.map((key) => {
            if (scopeValueByKey[key] instanceof ScopeVariablesWrapper) {
                return scopeValueByKey[key];
            }
            return scopeValueByKey[key].value;
        });

        const scopeWrapper = new ScopeVariablesWrapper(scopeValueByKey);

        useEffect(() => {
            const settersByKey = localKeys.reduce<Record<string, TSetState<any>>>((res, key) => {
                res[key] = scopeValueByKey[key].setValue as TSetState<any>;
                return res;
            }, {});
            scope._setSettersByKey(settersByKey);
        }, []);

        useEffectNoInit(() => {
            const updateByReactContext = {
                ...scopeWrapper.toObject(),
                $$__GlobalScope_updater: 'react-context',
            };
            console.log('scopeWrapper object', scopeWrapper, updateByReactContext);
            scope.updateByObject(updateByReactContext);
        }, depValues);

        return (
            <Context.Provider value={scopeWrapper}>
                {children}
            </Context.Provider>
        );
    };

    return React.memo(ContextNode);
};