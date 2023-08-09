import { Nullable, Observer } from '@cheprasov/data-structures';
import type { TSetState, TSetStateAction } from './types';
type TScopeData<T extends Record<string, any>> = {
    [K in keyof T]: T[K];
};
type TSettersByKey = Record<string, TSetState<any>>;
export declare class Scope<TData extends TScopeData<{}> = {}> {
    protected _data: TData;
    protected _observer: Observer.Observer<Scope<TData>>;
    protected _settersByKey: Nullable<TSettersByKey>;
    protected _childrenScopesByKey: Readonly<Record<string, Scope<any>>>;
    constructor(scope: TData);
    _getData(): TData;
    _getObserver(): Observer.Observer<Scope<TData>>;
    _setSettersByKey(setters: TSettersByKey): void;
    getChildrenScopesByKey(): Record<string, Scope<any>>;
    getNestedScope<T extends TScopeData<{}> = {}>(name: string): Nullable<Scope<T>>;
    set<TKey extends keyof TData, TValue>(key: TKey, value: TSetStateAction<TValue>): false | undefined;
    get<TKey extends keyof TData>(key: TKey): TData[TKey];
    toObject(): Record<string, any>;
    updateByObject(obj: Record<string, any>): false | undefined;
    addScopeUpdatesListener(listener: Observer.ListenerCallback<Scope<TData>>): void;
    removeScopeUpdatesListener(listener: Function): void;
}
export {};
