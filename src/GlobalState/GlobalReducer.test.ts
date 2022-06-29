import { isGlobalReducer, GlobalReducer } from './GlobalReducer';

describe('GlobalReducer', () => {
    it('should create a new instance of GlobalReducer', () => {
        const obj = {
            foo: 'bar',
        };
        const reducer = () => {};
        const globalReducer = new GlobalReducer(reducer, obj);
        expect(isGlobalReducer(globalReducer)).toEqual(true);
    });

    it('should return props from GlobalReduce instance', () => {
        const obj = {
            foo: 'bar',
        };
        const reducer = () => {};
        const init = () => obj;
        const globalReducer = new GlobalReducer(reducer, obj, init);
        expect(globalReducer.reducer).toBe(reducer);
        expect(globalReducer.initialState).toBe(obj);
        expect(globalReducer.initializer).toBe(init);
    });
});

describe('isGlobalReducer', () => {
    it('should return TRUE if object is a Scope', () => {
        expect(isGlobalReducer(new GlobalReducer(() => {}, { foo: 'bar' }))).toEqual(true);
    });

    it('should return FALSE if value is a Scope', () => {
        expect(isGlobalReducer({ foo: 'bar' })).toEqual(false);
        expect(isGlobalReducer({ foo: 'bar', $$_scopeType: 'foo' })).toEqual(false);
        expect(isGlobalReducer(['foo', 'bar'])).toEqual(false);
        expect(isGlobalReducer(null)).toEqual(false);
        expect(isGlobalReducer(undefined)).toEqual(false);
        expect(isGlobalReducer(0)).toEqual(false);
        expect(isGlobalReducer(1)).toEqual(false);
        expect(isGlobalReducer('foo')).toEqual(false);
        expect(isGlobalReducer(true)).toEqual(false);
        expect(isGlobalReducer(false)).toEqual(false);
        expect(isGlobalReducer({})).toEqual(false);
        expect(isGlobalReducer([])).toEqual(false);
    });
});