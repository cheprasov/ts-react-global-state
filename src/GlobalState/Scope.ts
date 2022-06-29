import { GlobalScope } from './GlobalScope';
import { ScopeVariablesInf } from './GlobalState';
import { isStateTupleExtenderType, SetStateType, StateTupleExtenderType } from './types';

export type Scope<T> = {
    [P in keyof T]:
        T[P] extends GlobalScope<any>
            ? Scope<T[P]>
            : [T[P], SetStateType<T[P]>] & StateTupleExtenderType<T[P]>
} & ScopeMethods;

interface ScopeMethods {
    toObject(): Record<string, any>;
    fromObject(obj: Record<string, any>): void;
}

interface ScopeInf {
    new <T>(data: T): Scope<T>;
}

export const Scope = class <T extends {}> {

    constructor(data: T) {
        Object.assign(this, data)
    }

    toObject(this: T): Record<string, any> {
        const result: Record<string, any> = {};

        for (let key in this) {
            if (!this.hasOwnProperty(key)) {
                continue;
            }
            const value = this[key];
            if (value instanceof Scope) {
                result[key] = (value as any).toObject();
            } else if (isStateTupleExtenderType(value)) {
                result[key] = value[0]; // state & reducer
            }
        }

        return result;
    }

    fromObject(this: T, obj: Record<string, any>): void {
        if (typeof obj !== 'object' || !obj) {
            return;
        }
        for (let key in this) {
            if (!this.hasOwnProperty(key)) {
                continue;
            }
            if (!(key in obj)) {
                continue;
            }
            const objValue = obj[key];
            const value = (this as T)[key];

            if (value instanceof Scope) {
                value.fromObject(objValue);
            } else if (isStateTupleExtenderType<typeof value>(value)) {
                value.setStateValue(objValue);
            }
        }
    }

} as ScopeInf;