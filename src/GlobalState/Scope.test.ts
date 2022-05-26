import { isScope, Scope } from './Scope';

describe('Scope', () => {
    it('should create a new scope object', () => {
        const obj = {
            foo: 'bar',
        };
        const scope = Scope(obj);
        expect(isScope(scope)).toEqual(true);
        expect(scope).not.toBe(obj);
        expect(scope.$$_scopeType).toEqual('scope');
    });
});

describe('isScope', () => {
    it('should return TRUE if object is a Scope', () => {
        expect(isScope(Scope({ foo: 'bar' }))).toEqual(true);
        expect(isScope({ foo: 'bar', $$_scopeType: 'scope' })).toEqual(true);
    });

    it('should return FALSE if value is a Scope', () => {
        expect(isScope({ foo: 'bar' })).toEqual(false);
        expect(isScope({ foo: 'bar', $$_scopeType: 'foo' })).toEqual(false);
        expect(isScope(['foo', 'bar'])).toEqual(false);
        expect(isScope(null)).toEqual(false);
        expect(isScope(undefined)).toEqual(false);
        expect(isScope(0)).toEqual(false);
        expect(isScope(1)).toEqual(false);
        expect(isScope('foo')).toEqual(false);
        expect(isScope(true)).toEqual(false);
        expect(isScope(false)).toEqual(false);
        expect(isScope({})).toEqual(false);
        expect(isScope([])).toEqual(false);
    });
});