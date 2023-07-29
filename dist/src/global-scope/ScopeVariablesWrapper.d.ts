import { Scope } from "./Scope";
import { IScopeVariables, TStateTupleExtended } from "./types";
export declare type TScopeValues<T> = T extends Array<any> ? TStateTupleExtended<T> : T extends Scope ? {
    [P in keyof T]: TScopeValues<T[P]>;
} & ScopeMethods : [T] extends [boolean] ? TStateTupleExtended<boolean> : TStateTupleExtended<T>;
interface ScopeMethods {
    toObject(): Record<string, any>;
}
interface IScopeTuplesWrapper {
    new <T>(data: T): IScopeVariables & ScopeMethods;
}
export declare const ScopeVariablesWrapper: IScopeTuplesWrapper;
export declare const isScopeWrapperInstance: <T>(value: any) => value is TScopeValues<T> & ScopeMethods;
export {};
