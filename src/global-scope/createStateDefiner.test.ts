import React from 'react';
import { createStateDefiner } from './createStateDefiner';
import { Scope } from './Scope';

describe('createStateDefiner', () => {

    it('should create a new function', () => {
        const f = createStateDefiner({foo: 10, bar: 20, baz: 30});
        expect(f).toBeInstanceOf(Function);
    });

    it('should create function with correct body', () => {
        const f = createStateDefiner({foo: 10, bar: 20, baz: 30, skip: new Scope({a: 1})});
        expect(f.toString()).toEqual(
`function anonymous(o,useState
) {
var n = {};
n["foo"] = useState(o["foo"]);
n["foo"].value = n["foo"][0];
n["foo"].setValue = n["foo"][1];
n["bar"] = useState(o["bar"]);
n["bar"].value = n["bar"][0];
n["bar"].setValue = n["bar"][1];
n["baz"] = useState(o["baz"]);
n["baz"].value = n["baz"][0];
n["baz"].setValue = n["baz"][1];
return n;
}`
        );
    });

    describe('Created function', () => {
        let scope: Record<string, any>;
        let useStateMock: typeof React.useState;
        let stateDefiner: ReturnType<typeof createStateDefiner>

        beforeEach(() => {
            scope = {foo: 10, bar: 20, baz: 30};
            useStateMock = jest.fn((v) => {
                const a = [v, `set ${v}`] as any;
                a.value = a[0];
                a.setValue = a[1];
                return a;
            }) as any;
            stateDefiner = createStateDefiner(scope);
        });

        it('should call useState function for each key/value of scope', () => {
            stateDefiner({...scope, skip: new Scope({a: 1})}, useStateMock);
            expect(useStateMock).toBeCalledTimes(Object.keys(scope).length);
            Object.values(scope).forEach((value) => {
                expect(useStateMock).toBeCalledWith(value);
            });
        });

        it('should skip Scope for calling useState', () => {
            stateDefiner(scope, useStateMock);
            expect(useStateMock).toBeCalledTimes(Object.keys(scope).length);
            Object.values(scope).forEach((value) => {
                expect(useStateMock).toBeCalledWith(value);
            });
        });

        it('should return an tuple array with state for each scope key', () => {
            const obj = stateDefiner(scope, useStateMock);
            expect(Object.keys(obj).length).toEqual(Object.keys(scope).length);
            Object.keys(obj).forEach((key) => {
                expect(obj[key]).toEqual(useStateMock(scope[key]));
            });
        });

        it('should return a new object for call', () => {
            const obj1 = stateDefiner(scope, useStateMock);
            const obj2 = stateDefiner(scope, useStateMock);
            expect(obj1).toEqual(obj2);
            expect(obj1).not.toBe(obj2);
        });

        it('should stringify correct complicated keys', () => {
            scope = {
                foo: 1,
                1: 2,
                "": 3,
                'with space': 4,
                "\"test\"": 5,
                "привет": 6,
                "\t\r\n": 7,
            };
            stateDefiner = createStateDefiner(scope);
            const obj = stateDefiner(scope, useStateMock);
            Object.keys(obj).forEach((key) => {
                expect(key in scope).toBeTruthy();
                expect(obj[key]).toEqual(useStateMock(scope[key]));
            });
        })
    });

});