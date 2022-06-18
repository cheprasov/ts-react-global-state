
export interface ReducerInf {
    $$_scopeType: 'reducer';
    reducer: React.Reducer<any, any>,
    initialState: any,
    initializer?: (init: any) => any,
}

export const isReducer = (value: any): value is ReducerInf => {
    return !!value && typeof value === 'object' && !Array.isArray(value) && value.$$_scopeType === 'reducer';
}

export const Reducer = (
    reducer: React.Reducer<any, any>,
    initialState: any,
    initializer?: (init: any) => any,
): ReducerInf => {
    return {
        reducer,
        initialState,
        initializer,
        $$_scopeType: 'reducer',
    };
}