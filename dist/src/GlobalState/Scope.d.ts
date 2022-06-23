import { ScopeVariablesInf } from './GlobalState';
export declare class Scope<T extends ScopeVariablesInf = {}, P = keyof T> {
    [P: string]: any;
    constructor(scope: T);
    toObject(): Record<string, any>;
}
