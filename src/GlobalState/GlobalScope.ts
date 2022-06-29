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

// 2const obj = new Md({ a: 1, b: 2 });

// export class GlobalScope<T> {
//     constructor(data: T) {
//         Object.assign(this, data)
//     }
// };

const obj = new GlobalScope({ a: 1, b: 2 });
// export class GlobalScope<T, K = Foo<T>> {
//     [in K]: T[keyof T];

//     public scope: string = '';

//     constructor(scope: Record<string, any>) {
//         for (const key in scope) {
//             (this as any)[key] = scope[key];
//         }
//     }
// }

export const isGlobalScope = (value: any): value is GlobalScope<any> => {
    return value instanceof GlobalScope;
}