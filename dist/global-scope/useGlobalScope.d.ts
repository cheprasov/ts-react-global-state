import { Scope } from './Scope';
import { TScopeValues } from './ScopeVariablesWrapper';
export declare const useGlobalScope: <T extends Record<string, any>>(scope?: string | Scope) => TScopeValues<T>;
