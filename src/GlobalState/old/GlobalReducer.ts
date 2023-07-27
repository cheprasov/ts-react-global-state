import React from 'react';

export class GlobalReducer<T> {
    public readonly reducer: React.Reducer<T, any>;
    public readonly initialState: T;
    public readonly initializer?: (init: any) => T;

    constructor(
        reducer: React.Reducer<T, any>,
        initialState: any,
        initializer?: (init: any) => T,
    ) {
        this.reducer = reducer;
        this.initialState = initialState;
        this.initializer = initializer;
    }
}

export const isGlobalReducer = (value: any): value is GlobalReducer<any> => {
    return value instanceof GlobalReducer;
}