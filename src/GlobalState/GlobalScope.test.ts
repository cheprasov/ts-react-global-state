import { ScopeVariablesInf } from './GlobalState';
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

    it('should return scope from the instance', () => {
        const obj = {
            foo: 'bar',
        };
        const gs = new GlobalScope(obj);
        expect(gs.scope).toBe(obj);
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