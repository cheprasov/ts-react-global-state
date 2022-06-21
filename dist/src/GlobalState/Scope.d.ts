export declare class GlobalScope {
    readonly scope: Record<string, any>;
    constructor(scope: Record<string, any>);
}
export declare const isGlobalScope: (value: any) => value is GlobalScope;
export declare class Scope<T extends Record<string, any> = {}, P = keyof T> {
    [P: string]: any;
    constructor(scope: T);
    toObject(): Record<string, any>;
}
