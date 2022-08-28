export type GlobalScope<T> = {
    [P in keyof T]: T[P]
}

interface GlobalScopeInf {
    new <T>(data: T): GlobalScope<T>
}

export const GlobalScope = class <T> {
    constructor(data: T) {
      Object.assign(this, data)
    }
} as GlobalScopeInf;

export const isGlobalScope = (value: any): value is GlobalScope<any> => {
    return value instanceof GlobalScope;
}