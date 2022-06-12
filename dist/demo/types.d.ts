import { ScopeInf } from '../src/GlobalState/GlobalState';
export interface UserScopeInf {
    name: string;
    city: string;
    age: number;
}
export interface ConfigScopeInf extends ScopeInf {
    env: string;
    lang: string;
}
export interface AppNestedScopeInf {
    app: ScopeInf & {
        settings: ScopeInf & {
            priceType: string;
        };
        customer: ScopeInf & {
            name: string;
            test: boolean;
            interests: {
                chess: string;
                it: string;
            };
        };
        search: ScopeInf & {
            departure: string;
            destination: string;
            date: number;
            rooms: {
                adult: number;
                children?: number;
            }[];
            nights: number;
            filters: ScopeInf & {
                rating: number;
                price: {
                    min: number;
                    max: number;
                };
            };
        };
    };
}
