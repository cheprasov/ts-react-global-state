import { Nullable, Object, Observer } from '@cheprasov/data-structures';
import { TSetState } from './types';

export interface IScopeData {
    [key: string]: any | Scope;
}

type TSettersByKey = Record<string, TSetState<any>>;

export class Scope {

    protected _data: IScopeData;
    protected _observer: Observer.Observer<IScopeData> = new Observer.Observer();
    protected _settersByKey: Nullable<TSettersByKey> = null;
    protected _childrenScopesByKey: Readonly<Record<string, Scope>> = {};

    constructor(scope: IScopeData) {
        this._data = scope;
        this._childrenScopesByKey = Object.Helper.filter(this._data, (value) => {
            if (value instanceof Scope) {
                return true;
            }
            return false;
        });
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

    getChildrenScopesByKey(): Record<string, Scope> {
        return this._childrenScopesByKey;
    }

    setValue<T>(key: string, value: TSetState<T>) {
        if (!(key in this._data)) {
            throw new Error(`Key '${key}' not found in Scope`);
        }
        if (key in this._childrenScopesByKey) {
            return this._childrenScopesByKey[key].updateByObject(value);
        }
        if (this._settersByKey) {
            this._settersByKey[key](value);
        } else {
            this._data[key] = typeof value === 'function' ? value(this._data[key]) : value;
        }
    }

    getValue(key: string) {
        if (!(key in this._data)) {
            throw new Error(`Key '${key}' not found in Scope`);
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
                this.setValue(key, newValue);
                this._data[key] = newValue;
            }
        }
        if (isUpdateByReactContext) {
            (async () => {
                this._observer.publish(this);
            })();
        }
    }

    addScopeUpdatesListener(listener: Observer.ListenerCallback<IScopeData>) {
        this._observer.subscribe(listener);
    }

    removeScopeUpdatesListener(listener: Function) {
    }
}