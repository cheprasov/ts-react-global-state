import { GlobalScope } from './GlobalScope';
import { StateTupleExtendedType } from './types';
export declare type Scope<T> = {
    [P in keyof T]: T[P] extends GlobalScope<any> ? Scope<T[P]> : StateTupleExtendedType<T[P]>;
} & ScopeMethods;
interface ScopeMethods {
    toObject(): Record<string, any>;
    fromObject(obj: Record<string, any>): void;
}
interface ScopeInf {
    new <T>(data: T): Scope<T>;
}
export declare const Scope: ScopeInf;
export {};
