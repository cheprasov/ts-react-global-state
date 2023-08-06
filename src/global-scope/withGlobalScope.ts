import React, { createElement } from 'react';
import { useGlobalScope } from './useGlobalScope';

export const withGlobalScope = <P extends object>
(Component: React.ComponentType<P>, scopeToProp: Record<string, string>): React.FC<P> => {
    return new Function('useGlobalScope', 'createElement', 'Component', 'scope', 'props', `
        var o = {};
        for (let key in scope) {
            if (!scope.hasOwnProperty(key)) {
                continue;
            }
            o[scope[key]] = useGlobalScope(key);
        }
        var n = Object.assign(o, props);
        delete n.children;
        return createElement(Component, n, props.children);
    `).bind(null, useGlobalScope, createElement, Component, { ...scopeToProp });
}