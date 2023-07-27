import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Scope } from '../../src/GlobalState/Scope';
import { createGlobalScope } from '../../src/GlobalState/createGlobalScope';

const scope = new Scope({
    app: new Scope({
        settings: new Scope({
            priceType: 'total', // total | perPerson
            test: true,
        }),
        // counter: new GlobalReducer<{ counter: number, }>(
        //     (prevState, action) => {
        //         let counter = prevState.counter;
        //         switch (action?.type) {
        //             case 'increment': counter += 1;
        //             break;
        //             case 'decrement': counter -= 1;
        //             break;
        //             case 'init':
        //                 if (action?.init) {
        //                     counter = action?.init;
        //                 }
        //             break;
        //         }
        //         return {
        //             ...prevState,
        //             counter,
        //             toObject: () => counter,
        //         }
        //     },
        //     {
        //         counter: 10,
        //         toObject: () => 10,
        //     },
        // ),
        user: new Scope({
            name: 'Alex',
            city: 'London',
            age: 37,
            hobby: new Scope({
                chess: 'beginner',
                it: 'expert',
            }),
        }),
        search: new Scope({
            departure: 'London',
            destination: 'Paris',
            date: Date.now(),
            rooms: [
                { adult: 2 },
            ],
            nights: 7,
            filters: new Scope({
                rating: 5,
                price: {
                    min: 0,
                    max: 1000,
                },
            }),
        }),
    }),
});

const GlobalScope = createGlobalScope(scope);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <GlobalScope>
        <App/>
    </GlobalScope>
);