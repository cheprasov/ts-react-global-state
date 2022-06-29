export declare type GlobalScope<T> = {
    [P in keyof T]: T[P];
};
interface GlobalScopeInf {
    new <T>(data: T): GlobalScope<T>;
}
export declare const GlobalScope: GlobalScopeInf;
export declare const isGlobalScope: (value: any) => value is GlobalScope<any>;
export {};
