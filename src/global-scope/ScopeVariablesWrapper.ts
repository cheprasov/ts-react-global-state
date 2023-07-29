import { Scope } from "./Scope";
import { IScopeVariables, TStateTupleExtended } from "./types";

export type TScopeValues<T> =
// T extends GlobalReducer<any>
//? (ReducerTupleExtendedType<T['initialState'], T['reducer']>)
//: (
T extends Array<any>
? TStateTupleExtended<T>
: T extends Scope
? {
    [P in keyof T]: TScopeValues<T[P]>;
} & ScopeMethods
: [T] extends [boolean]
? TStateTupleExtended<boolean>
: TStateTupleExtended<T>;
//)

interface ScopeMethods {
    toObject(): Record<string, any>;
    //fromObject(obj: any): void;
}

interface IScopeTuplesWrapper {
    new <T>(data: T): IScopeVariables & ScopeMethods;
}

export const ScopeVariablesWrapper = class ScopeVariablesWrapper<T extends IScopeVariables> {
    constructor(data: T) {
        Object.assign(this, data);
    }

    toObject(this: T): Record<string, any> {
        const result: Record<string, any> = {};
        for (let key in this) {
            if (!this.hasOwnProperty(key)) {
                continue;
            }
            const value = this[key];
            if (isScopeWrapperInstance(value)) {
                result[key] = value.toObject();
            } else {
                result[key] = value.value;
            }
        }

        return result;
    }
} as IScopeTuplesWrapper;

export const isScopeWrapperInstance = <T>(
    value: any
    ): value is TScopeValues<T> & ScopeMethods => {
        return value instanceof ScopeVariablesWrapper;
    };
