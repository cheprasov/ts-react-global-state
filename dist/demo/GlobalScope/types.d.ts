import { GlobalReducer } from '../../src/GlobalState/GlobalReducer';
import { GlobalScope } from '../../src/GlobalState/createGlobalScope';
export interface AppNestedScopeInf {
    app: GlobalScope<{
        settings: GlobalScope<{
            priceType: string;
            test: boolean;
        }>;
        counter: GlobalReducer<{
            counter: number;
        }>;
        user: GlobalScope<{
            name: string;
            city: string;
            age: number;
            hobby: GlobalScope<{
                chess: string;
                it: string;
            }>;
        }>;
        search: GlobalScope<{
            departure: string;
            destination: string;
            date: number;
            rooms: {
                adult: number;
                children?: number;
            }[];
            nights: number;
            filters: GlobalScope<{
                rating: number;
                price: {
                    min: number;
                    max: number;
                };
            }>;
        }>;
    }>;
}
