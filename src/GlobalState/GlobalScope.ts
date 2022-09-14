export type GlobalScope<T> = {
    [P in keyof T]: T[P];
}

interface GlobalScopeInf {
    new <T>(data: T): GlobalScope<T>;
}

export const GlobalScope = class <T extends Record<string, any>> {
    constructor(data: T) {
        Object.assign(this, data);
    }
} as GlobalScopeInf;

export const isGlobalScope = (value: any): value is GlobalScope<any> => {
    return value instanceof GlobalScope;
};

export const hydrateGlobalScope = (scope: GlobalScope<any>, obj: Record<string, any>): void => {
    if (typeof obj !== 'object' || !obj) {
        return;
    }
    for (let key in scope) {
        if (!scope.hasOwnProperty(key)) {
            continue;
        }
        if (!(key in obj)) {
            continue;
        }
        const objValue = obj[key];
        const value = scope[key];

        if (isGlobalScope(value)) {
            hydrateGlobalScope(value, objValue);
        } else {
            scope[key] = objValue;
        }
    }
};