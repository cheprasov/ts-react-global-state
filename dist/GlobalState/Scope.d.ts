export interface IScopeData {
    [key: string]: any | Scope;
}
export declare class Scope {
    protected _data: IScopeData;
    protected _reactContext: any;
    constructor(scope: IScopeData);
    _getData(): IScopeData;
    setReactContext(context: any): void;
    getReactContext(): any;
    getChildrenScopes(): Record<string, Scope>;
    setValue(key: string, value: any): void;
    toObject(): Record<string, any>;
    fromObject(obj: Record<string, any>): void;
    addScopeUpdateListener(listener: Function, options: {}): void;
    removeScopeUpdateListener(listener: Function): void;
}
