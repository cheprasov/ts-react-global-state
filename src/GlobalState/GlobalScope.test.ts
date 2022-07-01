import { isGlobalScope, GlobalScope } from './GlobalScope';

describe('GlobalScope', () => {
    it('should create a new instance of GlobalScope', () => {
        const obj = {
            foo: 'bar',
        };
        const scope = new GlobalScope(obj);
        expect(isGlobalScope(scope)).toEqual(true);
        expect(scope).not.toBe(obj);
    });


    it('should allow to access all passed props', () => {
        const obj = {
            foo: 'foo42',
            bar: 42,
            user: { name: 'Alex' },
        };
        const scope = new GlobalScope(obj) as any;
        expect(scope).toEqual(obj);
        expect(scope).not.toBe(obj);
        expect(scope.foo).toEqual(obj.foo);
        expect(scope.bar).toEqual(obj.bar);
        expect(scope.user).toEqual(obj.user);
    });

    it('should return only passed props for iteration', () => {
        const obj = {
            foo: 'foo42',
            bar: 42,
            user: { name: 'Alex' },
        };
        const scope = new GlobalScope(obj);
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
        expect(otherKeys.sort()).toEqual([]);
    });
});

describe('isGlobalScope', () => {
    it('should return TRUE if object is a Scope', () => {
        expect(isGlobalScope(new GlobalScope({ foo: 'bar' }))).toEqual(true);
    });

    it('should return FALSE if value is a Scope', () => {
        expect(isGlobalScope({ foo: 'bar' })).toEqual(false);
        expect(isGlobalScope({ foo: 'bar', $$_scopeType: 'foo' })).toEqual(false);
        expect(isGlobalScope(['foo', 'bar'])).toEqual(false);
        expect(isGlobalScope(null)).toEqual(false);
        expect(isGlobalScope(undefined)).toEqual(false);
        expect(isGlobalScope(0)).toEqual(false);
        expect(isGlobalScope(1)).toEqual(false);
        expect(isGlobalScope('foo')).toEqual(false);
        expect(isGlobalScope(true)).toEqual(false);
        expect(isGlobalScope(false)).toEqual(false);
        expect(isGlobalScope({})).toEqual(false);
        expect(isGlobalScope([])).toEqual(false);
    });
});