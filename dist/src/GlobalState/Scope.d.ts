export interface ScopeInf {
    $$_scopeType: 'scope';
}
export declare const isScope: (value: any) => value is ScopeInf;
export declare const Scope: <T extends Record<string, any>>(scope: T) => T & ScopeInf;
