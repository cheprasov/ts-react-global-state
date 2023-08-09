import { Scope, TExtractScope } from '../../src';
export type TAppScope = Scope<{
    app: Scope<{
        date: Date;
        settings: Scope<{
            priceType: string;
            test: boolean;
        }>;
        user: Scope<{
            name: string;
            city: string;
            age: number;
            hobby: Scope<{
                chess: string;
                it: string;
            }>;
        }>;
        search: Scope<{
            departure: string;
            destination: string;
            date: number;
            rooms: {
                adult: number;
                children?: number;
            }[];
            nights: number;
            filters: Scope<{
                rating: number;
                price: {
                    min: number;
                    max: number;
                };
            }>;
        }>;
    }>;
}>;
export type TAppUseScope = TExtractScope<TAppScope>;
