import { GlobalReducer } from './GlobalReducer';
import { GlobalScope } from './GlobalScope';
import { isReducerTupleExtendedType, isStateTupleExtendedType, ReducerTupleExtendedType, SetStateType, StateTupleExtendedType } from './types';

export type Scope<T> =
    T extends GlobalReducer<any>
    ? (ReducerTupleExtendedType<T['initialState'], T['reducer']>)
    : (
        T extends GlobalScope<any>
        ? {
            [P in keyof T]: Scope<T[P]>
        } & ScopeMethods
        :  (
            [T] extends [boolean]
            ? StateTupleExtendedType<boolean>
            : StateTupleExtendedType<T>
        )
    );

interface ScopeMethods {
    toObject(): Record<string, any>;
    fromObject(obj: any): void;
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
            if (isScopeInstance(value)) {
                result[key] = value.toObject();
            } else if (isReducerTupleExtendedType<any, any>(value)) {
                result[key] = 'toObject' in value.stateValue ? value.stateValue.toObject() : value.stateValue;
            } else if (isStateTupleExtendedType(value)) {
                result[key] = value.stateValue; // state & reducer
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
            const value = this[key];

            if (isScopeInstance(value)) {
                value.fromObject(objValue);
            } else if (isReducerTupleExtendedType<any, any>(value)) {
               value.dispatchStateValue({ type: 'init', init: objValue });
            } else if (isStateTupleExtendedType<typeof value>(value)) {
                value.setStateValue(objValue);
            }
        }
    }

} as ScopeInf;

export const isScopeInstance = <T>(value: any): value is Scope<T> & ScopeMethods => {
    return value instanceof Scope;
}