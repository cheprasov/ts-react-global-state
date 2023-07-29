import { Observer } from '@cheprasov/data-structures';
export interface IScopeData {
    [key: string]: any | Scope;
}
export declare class Scope {
    protected _data: IScopeData;
    protected _reactContext: any;
    protected _observer: Observer.Observer<IScopeData>;
    constructor(scope: IScopeData);
    _getData(): IScopeData;
    _getObserver(): Observer.Observer<IScopeData>;
    setReactContext(context: any): void;
    getReactContext(): any;
    getChildrenScopes(): Record<string, Scope>;
    setValue(key: string, value: any): void;
    toObject(): Record<string, any>;
    fromObject(obj: Record<string, any>): void;
    addScopeUpdatesListener(listener: Observer.ListenerCallback<IScopeData>): void;
    removeScopeUpdatesListener(listener: Function): void;
}
