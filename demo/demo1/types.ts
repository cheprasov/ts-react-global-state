import { ScopeInf } from '../../src/GlobalState/GlobalState';

export interface UserScopeInf {
    name: string;
    city: string;
    age: number;
}

export interface ConfigScopeInf {
    env: string; // prod, dev
    lang: string;
}