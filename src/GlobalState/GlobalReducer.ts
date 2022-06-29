import React from 'react';

export class GlobalReducer {
    public readonly reducer: React.Reducer<any, any>;
    public readonly initialState: any;
    public readonly initializer?: (init: any) => any;

    constructor(
        reducer: React.Reducer<any, any>,
        initialState: any,
        initializer?: (init: any) => any,
    ) {
        this.reducer = reducer;
        this.initialState = initialState;
        this.initializer = initializer;
    }
}

export const isGlobalReducer = (value: any): value is GlobalReducer => {
    return value instanceof GlobalReducer;
}