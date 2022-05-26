import { ScopeInf } from '../../src/GlobalState/Scope';
export interface AppNestedScopeInf {
    app: ScopeInf & {
        settings: ScopeInf & {
            priceType: string;
        };
        user: ScopeInf & {
            name: string;
            city: string;
            age: number;
            hobby: ScopeInf & {
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
