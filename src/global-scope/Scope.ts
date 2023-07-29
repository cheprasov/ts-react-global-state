import { Nullable, Object, Observer } from '@cheprasov/data-structures';
import { IScopeVariables, TSetState } from './types';

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

    setValue(key: string, value: any) {
        if (!(key in this._data)) {
            throw new Error(`Key '${key}' not found in Scope`);
        }
        if (key in this._childrenScopesByKey) {
            return this._childrenScopesByKey[key].fromObject(value);
        }
        if (this._settersByKey) {
            this._settersByKey[key](value);
        } else {
            this._data[key] = value;
        }
    }

    getValue(key: string) {
        if (!(key in this._data)) {
            throw new Error(`Key '${key}' not found in Scope`);
        }
        // if (key in this._childrenScopesByKey) {
        //     return this._childrenScopesByKey[key].fromObject(value);
        // }
        return this._data[key];
    }

    toObject(): Record<string, any> {
        return {};
    }

    fromObject(obj: Record<string, any>): boolean {
        let isUpdated = false;
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
                isUpdated = isUpdated || currentValue.fromObject(newValue);
            } else if (newValue !== currentValue) {
                this._data[key] = newValue;
                isUpdated = true;
            }
        }
        new Promise(() => {
            this._observer.publish({...this._data});
        })
        return isUpdated;
    }

    addScopeUpdatesListener(listener: Observer.ListenerCallback<IScopeData>) {
        this._observer.subscribe(listener);
    }

    removeScopeUpdatesListener(listener: Function) {
    }
}