import { Scope } from './Scope';
import { IScopeVariables, TScope, TStateTupleExtended } from './types';

export type TScopeValues<T> = T extends TScope
    ? Omit<{ [P in keyof T]: TScopeValues<T[P]> } & IScopeMethods, '$$__global_scope_type'>
    : [T] extends [boolean]
        ? TStateTupleExtended<boolean>
        : TStateTupleExtended<T>;

interface IScopeMethods {
    toObject(): Record<string, any>;
}

interface IScopeTuplesWrapper {
    new <T>(data: T): IScopeVariables & IScopeMethods;
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

export const isScopeWrapperInstance = <T>(value: any): value is TScopeValues<T> & IScopeMethods => {
    return value instanceof ScopeVariablesWrapper;
};
