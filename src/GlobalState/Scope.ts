import { ScopeVariablesInf } from './GlobalState';

export class Scope<T extends ScopeVariablesInf = {}, P = keyof T> {
    [P: string]: any;

    constructor(scope: T) {
        for (const key in scope) {
            (this as any)[key] = scope[key];
        }
    }

    toObject(): Record<string, any> {
        const result: Record<string, any> = {};

        for (let key in this) {
            if (!this.hasOwnProperty(key)) {
                continue;
            }
            const value = (this as any)[key];
            if (value instanceof Scope) {
                result[key] = (value as any).toObject();
            } else if (Array.isArray(value)) {
                result[key] = value[0]; // state & reducer
            } else {
                result[key] = value;
            }
        }

        return result;
    }

}