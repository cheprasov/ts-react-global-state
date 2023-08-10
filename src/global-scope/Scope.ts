import { Nullable, Objects, Observer, Strings } from '@cheprasov/data-structures';
import type { TSetState, TSetStateAction } from './types';

type TScopeData<T extends Record<string, any>> = {
    [K in keyof T]: T[K];
}

type TSettersByKey = Record<string, TSetState<any>>;

export class Scope<TData extends TScopeData<{}> = {}> {

    protected _data: TData;
    protected _observer: Observer.Observer<Scope<TData>> = new Observer.Observer();
    protected _settersByKey: Nullable<TSettersByKey> = null;
    protected _childrenScopesByKey: Readonly<Record<string, Scope<any>>> = {};

    constructor(scope: TData) {
        this._data = scope;
        this._childrenScopesByKey = Objects.Helper.filter(this._data, (value) => {
            if (value instanceof Scope) {
                return true;
            }
            return false;
        }) as TData;
    }

    _getData() {
        return this._data;
    }

    _getObserver() {
        return this._observer;
    }

    _setSettersByKey(setters: TSettersByKey) {
        this._settersByKey = setters;
    }

    getChildrenScopesByKey(): Record<string, Scope<any>> {
        return this._childrenScopesByKey;
    }

    getNestedScope<T extends TScopeData<{}> = {}>(name: string): Nullable<Scope<T>> {
        const [ first, other ] = Strings.cut(name, '.');
        const childScope = this._childrenScopesByKey[first];
        if (childScope) {
            return other ? childScope.getNestedScope(other) : childScope;
        }
        return null;
    }

    set<TKey extends keyof TData, TValue>(key: TKey, value: TSetStateAction<TValue>) {
        if (!(key in this._data)) {
            throw new Error(`Key '${String(key)}' not found in Scope`);
        }
        if (key in this._childrenScopesByKey && typeof value === 'object' && value) {
            return this._childrenScopesByKey[key as string].updateByObject(value);
        }
        if (this._settersByKey) {
            this._settersByKey[key as string](value);
        } else {
            // @ts-ignore
            this._data[key] = typeof value === 'function' ? value(this._data[key]) : value;
        }
    }

    get<TKey extends keyof TData>(key: TKey): TData[TKey] {
        if (!(key in this._data)) {
            throw new Error(`Key '${String(key)}' not found in Scope`);
        }
        return this._data[key];
    }

    toObject(): Record<string, any> {
        const result: Record<string, any> = {};
        for (let key in this._data) {
            if (!this._data.hasOwnProperty(key)) {
                continue;
            }
            const value = this._data[key];
            if (value instanceof Scope) {
                result[key] = value.toObject();
            } else {
                result[key] = value;
            }
        }

        return result;
    }

    updateByObject(obj: Record<string, any>) {
        const isUpdateByReactContext = obj.$$__GlobalScope_updater === 'react-context';
        delete obj.$$__gs_updater;
        if (typeof obj !== 'object' || !obj) {
            return false;
        }
        for (let key in this._data) {
            if (!this._data.hasOwnProperty(key)) {
                continue;
            }
            if (!(key in obj)) {
                continue;
            }
            const newValue = obj[key];
            const currentValue = this._data[key];

            if (currentValue instanceof Scope) {
                currentValue.updateByObject(newValue);
            } else if (newValue !== currentValue) {
                this.set(key, newValue);
                this._data[key] = newValue;
            }
        }
        if (isUpdateByReactContext) {
            (async () => {
                this._observer.publish(this);
            })();
        }
    }

    subscribe(listener: Observer.ListenerCallback<Scope<TData>>) {
        this._observer.subscribe(listener);
    }

    unsubscribe(listener: Observer.ListenerCallback<Scope<TData>>) {
        this._observer.unsubscribe(listener);
    }
}