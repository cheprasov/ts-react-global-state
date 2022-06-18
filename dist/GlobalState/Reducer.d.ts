/// <reference types="react" />
export interface ReducerInf {
    $$_scopeType: 'reducer';
    reducer: React.Reducer<any, any>;
    initialState: any;
    initializer?: (init: any) => any;
}
export declare const isReducer: (value: any) => value is ReducerInf;
export declare const Reducer: (reducer: React.Reducer<any, any>, initialState: any, initializer?: ((init: any) => any) | undefined) => ReducerInf;
