import React from 'react';
export declare class GlobalReducer<T> {
    readonly reducer: React.Reducer<T, any>;
    readonly initialState: T;
    readonly initializer?: (init: any) => T;
    constructor(reducer: React.Reducer<T, any>, initialState: any, initializer?: (init: any) => T);
}
export declare const isGlobalReducer: (value: any) => value is GlobalReducer<any>;
