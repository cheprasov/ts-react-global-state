import { Scope, TScope } from '../../src';
import { TExtractScope } from '../../src/global-scope/Scope';

type TTestScope = Scope<{
    user: string,
    test: boolean
    settings: Scope<{ lang: string,  test: boolean }>,
}>;

const testScope: TTestScope = new Scope({
    user: 'Alex',
    test: true,
    settings: new Scope({ lang: 'rus',  test: false }),
});

export type TAppScope = Scope<{
    app: Scope<{
        date: Date,
        settings: Scope<{
            priceType: string; // total | perPerson
            test: boolean;
        }>;
        // counter: GlobalReducer<{
        //     counter: number,
        // }>;
        user: Scope<{
            name: string;
            city: string;
            age: number;
            hobby: Scope<{
                chess: string;
                it: string;
            }>,
        }>;
        search: Scope<{
            departure: string;
            destination: string;
            date: number;
            rooms: {adult: number, children?: number}[];
            nights: number,
            filters: Scope<{
                rating: number,
                price: {
                    min: number,
                    max: number,
                },
            }>,
        }>,
    }>,
}>;

type Ex = TExtractScope<TAppScope>;


export type TAppScope2 = TScope<{
    app: TScope<{
        date: Date,
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
