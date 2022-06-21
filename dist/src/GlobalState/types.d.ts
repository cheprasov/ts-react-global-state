export declare type OpenPropsType<T extends Record<string, any>> = {
    [P in keyof T]: T[P];
};
