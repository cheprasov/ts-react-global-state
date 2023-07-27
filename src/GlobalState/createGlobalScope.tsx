import { ObjectHelper, Tree } from '@cheprasov/data-structures';
import { Scope } from './Scope';
import { Nullable } from '@cheprasov/data-structures/dist/types/Nullable';
import React from 'react';
import { TContextByScopeOrName } from './types';
import { createGlobalScopeContext } from './createGlobalScopeContext';
import { GlobalScopeWrapper } from './GlobalScopeWrapper';
import ComponentWrapper from '../ComponentsWrapper/ComponentWrapper';

export type TScopeByKey = Map<string, Scope>;

interface IScopeNode {
    key: string;
    scope: Scope;
    parent: Nullable<Scope>;
    type: 'scope'
};

export const createGlobalScope = (scope: Scope) => {
    const contextByScopeOrName: TContextByScopeOrName = new Map();

    const scopeNodes = Tree.levelOrderTreeTraversal<IScopeNode, IScopeNode[]>(
        { key: '', scope, parent: null, type: 'scope' },
        (node) => {
            return ObjectHelper.reduce<IScopeNode[], Scope, Record<string, Scope>>(node.scope.getChildrenScopes(), (res, scope, key) => {
                res.push({ key, scope, parent: node.scope, type: 'scope' });
                return res;
            }, []);
        },
        (result, node) => {
            result.push(node);
            return result;
        },
        []
    );

    const globalScopes = scopeNodes.reverse().map((node: IScopeNode) => {
        if (node.type === 'scope') {
            return createGlobalScopeContext(node.scope, node.key, contextByScopeOrName);
        }
        return ({ children }: any) => children; // why i did this?
    });

    const ContextNode: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
        return (
            <GlobalScopeWrapper.Provider value={{ contextByScopeOrName }}>
                <ComponentWrapper components={globalScopes}>
                    {children}
                </ComponentWrapper>
            </GlobalScopeWrapper.Provider>
        );
    };

    return React.memo(ContextNode);
};