import { IScopeVariables, TScope, TStateTupleExtended } from './types';
export type TScopeValues<T> = T extends TScope ? Omit<{
    [P in keyof T]: TScopeValues<T[P]>;
} & IScopeMethods, '$$__global_scope_type'> : [T] extends [boolean] ? TStateTupleExtended<boolean> : TStateTupleExtended<T>;
interface IScopeMethods {
    toObject(): Record<string, any>;
}
interface IScopeTuplesWrapper {
    new <T>(data: T): IScopeVariables & IScopeMethods;
}
export declare const ScopeVariablesWrapper: IScopeTuplesWrapper;
export declare const isScopeWrapperInstance: <T>(value: any) => value is TScopeValues<T> & IScopeMethods;
export {};
