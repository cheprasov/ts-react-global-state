import { GlobalReducer } from '../../src/GlobalState/GlobalReducer';
import { GlobalScope } from '../../src/GlobalState/GlobalScope';

export interface AppNestedScopeInf {
    app: GlobalScope<{
        settings: GlobalScope<{
            priceType: string; // total | perPerson
        }>;
        counter: GlobalReducer<{
            counter: number,
        }>;
        user: GlobalScope<{
            name: string;
            city: string;
            age: number;
            hobby: GlobalScope<{
                chess: string;
                it: string;
            }>,
        }>;
        search: GlobalScope<{
            departure: string;
            destination: string;
            date: number;
            rooms: {adult: number, children?: number}[];
            nights: number,
            filters: GlobalScope<{
                rating: number,
                price: {
                    min: number,
                    max: number,
                },
            }>,
        }>,
    }>,
};


// export type Scope<T> =
//     T extends GlobalScope<any>
//     ? {
//         scope: true,
//       } & { toObject: any }
//     : (T extends GlobalReducer<any>
//       ? 'reducer'
//       : never
//     );

//  export type Scope<T> =
//     T extends GlobalReducer<any>
//     ? 'reducer'
//     : (T extends GlobalScope<any>
//       ? 'scope'
//       : never
//     );

// type T1 = Scope<AppNestedScopeInf['app']>;
// type T2 = Scope<AppNestedScopeInf['app']['counter']>;

type T3 = AppNestedScopeInf['app'];
