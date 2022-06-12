
export interface ScopeInf {
    $$_scopeType: 'scope';
}

export const isScope = (value: any): value is ScopeInf => {
    return !!value && typeof value === 'object' && !Array.isArray(value) && value.$$_scopeType === 'scope';
}

export const Scope = <T extends Record<string, any>>(scope: T): T & ScopeInf => {
    return {
        ...scope,
        $$_scopeType: 'scope',
    }
}