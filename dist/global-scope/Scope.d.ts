import { Nullable, Observer } from '@cheprasov/data-structures';
import { TSetState } from './types';
export interface IScopeData {
    [key: string]: any | Scope;
}
declare type TSettersByKey = Record<string, TSetState<any>>;
export declare class Scope {
    protected _data: IScopeData;
    protected _observer: Observer.Observer<IScopeData>;
    protected _settersByKey: Nullable<TSettersByKey>;
    protected _childrenScopesByKey: Readonly<Record<string, Scope>>;
    constructor(scope: IScopeData);
    _getData(): IScopeData;
    _getObserver(): Observer.Observer<IScopeData>;
    _setSettersByKey(setters: TSettersByKey): void;
    getChildrenScopesByKey(): Record<string, Scope>;
    setValue(key: string, value: any): boolean | undefined;
    getValue(key: string): any;
    toObject(): Record<string, any>;
    fromObject(obj: Record<string, any>): boolean;
    addScopeUpdatesListener(listener: Observer.ListenerCallback<IScopeData>): void;
    removeScopeUpdatesListener(listener: Function): void;
}
export {};
