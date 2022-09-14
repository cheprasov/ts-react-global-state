import { isGlobalScope, GlobalScope, hydrateGlobalScope } from './GlobalScope';

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

describe('hydrateGlobalScope', () => {
    it('should fill instance values from an object', () => {
        const obj = {
            foo: '',
            bar: 0,
            user: null,
            count: 10,
        };
        const scope = new GlobalScope(obj);
        const data = {
            foo: 'foo42',
            bar: 42,
            user: { name: 'Alex' },
        };
        hydrateGlobalScope(scope, data);

        expect(scope.foo).toEqual(data.foo);
        expect(scope.bar).toEqual(data.bar);
        expect(scope.user).toBe(data.user);
        expect(scope.count).toBe(obj.count);
    });

    it('should fill nested Global Scoped values from an object', () => {
        const obj = {
            foo: '',
            bar: 0,
            user: new GlobalScope({
                name: '',
                age: 0,
                hobby: new GlobalScope({
                    it: '',
                    humor: '',
                    laziness: ''
                }),
            }),
        };
        const scope = new GlobalScope(obj);
        const data = {
            foo: 'foo42',
            user: {
                name: 'Alex',
                age: 37,
                hobby: {
                    it: 'expert',
                    humor: 'advanced',
                    laziness: 'master',
                },
            },
        };
        hydrateGlobalScope(scope, data);

        expect(scope.foo).toEqual(data.foo);
        expect(scope.bar).toEqual(obj.bar);
        expect(scope.user).not.toBe(data.user);
        expect(scope.user.hobby).not.toBe(data.user.hobby);
        expect(scope.user.name).toEqual(data.user.name);
        expect(scope.user.age).toEqual(data.user.age);
        expect(scope.user.hobby.it).toEqual(data.user.hobby.it);
        expect(scope.user.hobby.humor).toEqual(data.user.hobby.humor);
        expect(scope.user.hobby.laziness).toEqual(data.user.hobby.laziness);
    });
})