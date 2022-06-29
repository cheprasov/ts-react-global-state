import React from 'react';
export declare class GlobalReducer {
    readonly reducer: React.Reducer<any, any>;
    readonly initialState: any;
    readonly initializer?: (init: any) => any;
    constructor(reducer: React.Reducer<any, any>, initialState: any, initializer?: (init: any) => any);
}
export declare const isGlobalReducer: (value: any) => value is GlobalReducer;
