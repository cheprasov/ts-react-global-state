import { ObjectHelper } from '@cheprasov/data-structures';

export interface IScopeData {
    [key: string]: any | Scope;
}

export class Scope {

    protected _data: IScopeData;
    protected _reactContext: any;

    constructor(scope: IScopeData) {
        this._data = scope;
    }

    _getData() {
        return this._data;
    }

    setReactContext(context: any) {
        this._reactContext = context;
    }

    getReactContext(): any {
        return this._reactContext;
    }

    getChildrenScopes(): Record<string, Scope> {
        return ObjectHelper.filter(this._data, (value) => {
            if (value instanceof Scope) {
                return true;
            }
            return false;
        });
    }

    setValue(key: string, value: any) {
    }

    toObject(): Record<string, any> {
        return {};
    }

    fromObject(obj: Record<string, any>) {
    }

    addScopeUpdateListener(listener: Function, options: {}) {
    }

    removeScopeUpdateListener(listener: Function) {
    }
}