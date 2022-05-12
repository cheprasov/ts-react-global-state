import { stringify } from './stringify';

describe('stringify', () => {
    it('should stringify string value', () => {
        expect(stringify('foo')).toEqual('"foo"');
        expect(stringify('foo bar')).toEqual('"foo bar"');
        expect(stringify('"foo"')).toEqual('"\\\"foo\\\""');
        expect(stringify('"')).toEqual('"\\\""');
        expect(stringify('')).toEqual('""');
        expect(stringify('\t')).toEqual('"\\t"');
        expect(stringify('\n')).toEqual('"\\n"');
        expect(stringify('some[]')).toEqual('"some[]"');
    });
});