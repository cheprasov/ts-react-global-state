import { Context, useContext } from 'react';
import { Scope } from './Scope';
import { GlobalScopeWrapper } from './GlobalScopeWrapper';
import { TScopeValues } from './ScopeVariablesWrapper';

export const useGlobalScope = <T extends Record<string, any>>(scope: string | Scope): TScopeValues<T> => {
    const wrapperData = useContext(GlobalScopeWrapper);
    const context = wrapperData.contextByScopeOrName.get(scope) as Context<any> | undefined;
    if (!context) {
        throw new Error(`Global Scope is not defined`);
    }
    return useContext(context);
};