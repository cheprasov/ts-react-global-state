import { IScopeVariables, TScope, TStateTupleExtended } from "./types";
export type TScopeValues<T> = T extends TScope<any> ? {
    [P in keyof T]: TScopeValues<T[P]>;
} & IScopeMethods : [T] extends [boolean] ? TStateTupleExtended<boolean> : TStateTupleExtended<T>;
interface IScopeMethods {
    toObject(): Record<string, any>;
}
interface IScopeTuplesWrapper {
    new <T>(data: T): IScopeVariables & IScopeMethods;
}
export declare const ScopeVariablesWrapper: IScopeTuplesWrapper;
export declare const isScopeWrapperInstance: <T>(value: any) => value is TScopeValues<T> & IScopeMethods;
export {};
