import { TScope } from '../../src';

export type TAppScope = TScope<{
    app: TScope<{
        settings: TScope<{
            priceType: string; // total | perPerson
            test: boolean;
        }>;
        // counter: GlobalReducer<{
        //     counter: number,
        // }>;
        user: TScope<{
            name: string;
            city: string;
            age: number;
            hobby: TScope<{
                chess: string;
                it: string;
            }>,
        }>;
        search: TScope<{
            departure: string;
            destination: string;
            date: number;
            rooms: {adult: number, children?: number}[];
            nights: number,
            filters: TScope<{
                rating: number,
                price: {
                    min: number,
                    max: number,
                },
            }>,
        }>,
    }>,
}>;
