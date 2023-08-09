import { Scope } from './Scope';

describe('Scope', () => {
    let rootScope: Scope<any>;
    let appScope: Scope<any>;
    let settingsScope: Scope<any>;
    let userScope: Scope<any>;
    let searchScope: Scope<any>;
    let filtersScope: Scope<any>;

    beforeEach(() => {
        rootScope = new Scope({
            app: appScope = new Scope({
                settings: settingsScope = new Scope({
                    priceType: 'total', // total | perPerson
                    test: true,
                }),
                user: userScope = new Scope({
                    name: 'Alex',
                    city: 'London',
                    age: 37,
                    hobby: new Scope({
                        chess: 'beginner',
                        it: 'expert',
                    }),
                }),
                search: searchScope = new Scope({
                    departure: 'London',
                    destination: 'Paris',
                    date: Date.now(),
                    rooms: [
                        { adult: 2 },
                    ],
                    nights: 7,
                    filters: filtersScope = new Scope({
                        rating: 5,
                        price: {
                            min: 0,
                            max: 1000,
                        },
                    }),
                }),
            }),
        });
    });

    describe('getNestedScope', () => {
        it('should return correct nested scope', () => {
            expect(rootScope.getNestedScope('app')).toBe(appScope);
            expect(rootScope.getNestedScope('app.search')).toBe(searchScope);
            expect(rootScope.getNestedScope('app.search.filters')).toBe(filtersScope);
        })
    })
});