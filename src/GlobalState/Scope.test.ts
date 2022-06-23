import { ScopeVariablesInf } from './GlobalState';
import { Scope } from './Scope';

describe('Scope', () => {
    describe('instance', () => {
        it('should create a new instance of Scope', () => {
            const obj = {
                foo: ['bar', undefined],
            } as ScopeVariablesInf;
            const scope = new Scope(obj);
            expect(scope).toBeInstanceOf(Scope);
        });

        it('should allow to access all passed props', () => {
            const obj = {
                foo: ['bar', () => 'baz'],
                bar: [42, () => 43],
                user: [{name: 'Alex'}, undefined],
            } as ScopeVariablesInf;
            const scope = new Scope(obj) as Scope & typeof obj;
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
                user: [{name: 'Alex'}, undefined],
            } as ScopeVariablesInf;
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
            expect(otherKeys.sort()).toEqual(['toObject']);
        });
    });

    describe('toObject', () => {
        it('should return object', () => {
            const obj = {
                foo: ['bar', () => 'baz'],
                bar: [42, () => 43],
                user: [
                    { name: 'Alex' }, undefined,
                ],
            } as ScopeVariablesInf;
            const scope = new Scope(obj) as Scope & typeof obj;
            expect(scope.toObject()).toEqual({
                foo: 'bar',
                bar: 42,
                user: { name: 'Alex' },
            });
        });

        it('should process correct nested scopes', () => {
            const obj = {
                foo: ['bar', () => 'baz'],
                bar: [42, () => 43],
                user: new Scope({
                    name: ['Alex', undefined],
                    hobby: new Scope({
                        it: ['expert', () => {}],
                        chess: ['beginner', () => {}],
                    })
                }),
            } as ScopeVariablesInf;
            const scope = new Scope(obj) as Scope & typeof obj;
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