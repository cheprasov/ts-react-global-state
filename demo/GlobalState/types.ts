import { GlobalScope } from '../../src/GlobalState/Scope';

export type UserScopeInf = {
    name: string;
    city: string;
    age: number;
} ;

export type ConfigScopeInf = {
    env: string; // prod, dev
    lang: string;
}