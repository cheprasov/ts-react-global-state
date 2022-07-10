import { ScopeVariablesInf } from './GlobalState';
import { Scope } from './Scope';
import { StateTupleExtendedType } from './types';

const extendStateTuple = (arr: Array<any>) => {
    (arr as StateTupleExtendedType<any>).globalState = true;
    (arr as StateTupleExtendedType<any>).stateValue = arr[0];
    (arr as StateTupleExtendedType<any>).setStateValue = arr[1];
    return arr;
}

describe('Scope', () => {
    describe('instance', () => {
        it('should create a new instance of Scope', () => {
            const obj = {
                foo: ['bar', () => {}],
            } as any;
            const scope = new Scope(obj);
            expect(scope).toBeInstanceOf(Scope);
        });

        it('should allow to access all passed props', () => {
            const obj = {
                foo: ['bar', () => 'baz'],
                bar: [42, () => 43],
                user: [{name: 'Alex'}, () => {}],
            } as any;
            const scope = new Scope(obj) as any;
            expect(scope).toEqual(obj);
            expect(scope).not.toBe(obj);
            expect(scope.foo).toEqual(obj.foo);
            expect(scope.bar).toEqual(obj.bar);
            expect(scope.user).toEqual(obj.user);
        });

        it('should return only passed props for iteration', () => {
            const obj = {
                foo: ['bar', () => 'baz'],
                bar: [42, () => 43],
                user: [{name: 'Alex'}, () => {}],
            } as any;
            const scope = new Scope(obj);
            expect(Object.keys(scope).sort()).toEqual(Object.keys(obj).sort());
            const ownKeys: string[] = [];
            const otherKeys: string[] = [];
            for (const key in scope) {
                if (scope.hasOwnProperty(key)) {
                    ownKeys.push(key);
                } else {
                    otherKeys.push(key);
                }
            }
            expect(ownKeys.sort()).toEqual(Object.keys(obj).sort());
            expect(otherKeys.sort()).toEqual(['fromObject', 'toObject']);
        });
    });

    describe('toObject', () => {
        it('should return object', () => {
            const obj = {
                foo: extendStateTuple(['bar', () => 'baz']),
                bar: extendStateTuple([42, () => 43]),
                user: extendStateTuple([{ name: 'Alex' }, () => {}]),
            } as any;
            const scope = new Scope(obj) as any;
            expect(scope.toObject()).toEqual({
                foo: 'bar',
                bar: 42,
                user: { name: 'Alex' },
            });
        });

        it('should process correct nested scopes', () => {
            const obj = {
                foo: extendStateTuple(['bar', () => 'baz']),
                bar: extendStateTuple([42, () => 43]),
                user: new Scope({
                    name: extendStateTuple(['Alex', () => {}]),
                    hobby: new Scope({
                        it: extendStateTuple(['expert', () => {}]),
                        chess: extendStateTuple(['beginner', () => {}]),
                    })
                }),
            } as any;
            const scope = new Scope(obj) as any;
            expect(scope.toObject()).toEqual({
                foo: 'bar',
                bar: 42,
                user: {
                    name: 'Alex',
                    hobby: {
                        it: 'expert',
                        chess: 'beginner',
                    }
                },
            });
        });
    });
});