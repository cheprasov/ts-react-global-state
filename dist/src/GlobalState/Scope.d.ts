import { GlobalReducer } from './GlobalReducer';
import { GlobalScope } from './GlobalScope';
import { ReducerTupleExtendedType, StateTupleExtendedType } from './types';
export declare type Scope<T> = T extends GlobalReducer<any> ? (ReducerTupleExtendedType<T['initialState'], T['reducer']>) : (T extends GlobalScope<any> ? {
    [P in keyof T]: Scope<T[P]>;
} & ScopeMethods : StateTupleExtendedType<T>);
interface ScopeMethods {
    toObject(): Record<string, any>;
    fromObject(obj: any): void;
}
interface ScopeInf {
    new <T>(data: T): Scope<T>;
}
export declare const Scope: ScopeInf;
export declare const isScopeInstance: <T>(value: any) => value is Scope<T> & ScopeMethods;
export {};
