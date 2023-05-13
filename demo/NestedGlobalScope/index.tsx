import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStates } from '../../src/GlobalState/GlobalState';
import { GlobalScope } from '../../src/GlobalState/GlobalScope';
import { GlobalReducer } from '../../src/GlobalState/GlobalReducer';
import App from './App';

const nestedScope = {
    app: new GlobalScope({
        settings: new GlobalScope({
            priceType: 'total', // total | perPerson
            test: true,
        }),
        counter: new GlobalReducer<{ counter: number, }>(
            (prevState, action) => {
                let counter = prevState.counter;
                switch (action?.type) {
                    case 'increment': counter += 1;
                    break;
                    case 'decrement': counter -= 1;
                    break;
                    case 'init':
                        if (action?.init) {
                            counter = action?.init;
                        }
                    break;
                }
                return {
                    ...prevState,
                    counter,
                    toObject: () => counter,
                }
            },
            {
                counter: 10,
                toObject: () => 10,
            },
        ),
        user: new GlobalScope({
            name: 'Alex',
            city: 'London',
            age: 37,
            hobby: new GlobalScope({
                chess: 'beginner',
                it: 'expert',
            }),
        }),
        search: new GlobalScope({
            departure: 'London',
            destination: 'Paris',
            date: Date.now(),
            rooms: [
                { adult: 2 },
            ],
            nights: 7,
            filters: new GlobalScope({
                rating: 5,
                price: {
                    min: 0,
                    max: 1000,
                },
            }),
        }),
    }),
};

const AppNestedState = createGlobalStates(nestedScope);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
    );
    root.render(
        <AppNestedState>
            <App/>
        </AppNestedState>
    );