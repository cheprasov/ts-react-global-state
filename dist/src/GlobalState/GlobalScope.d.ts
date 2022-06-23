export declare class GlobalScope {
    readonly scope: Record<string, any>;
    constructor(scope: Record<string, any>);
}
export declare const isGlobalScope: (value: any) => value is GlobalScope;
