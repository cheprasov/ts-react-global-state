export class GlobalScope {
    public readonly scope: Record<string, any>;

    constructor(scope: Record<string, any>) {
        this.scope = scope;
    }
}

// export function GlobalScope<T extends Record<string, any> = {}>(this: any, scope: T): T {
//     if (this instanceof GlobalScope) {
//         for (let key in scope) {
//             if (!scope.hasOwnProperty(key)) {
//                 continue;
//             }
//             (this as any)[key] = scope[key];
//         }
//         return this as T;
//     } else {
//         return new (GlobalScope as any)(scope);
//     }
// }

export const isGlobalScope = (value: any): value is GlobalScope => {
    return value instanceof GlobalScope;
}

export class Scope<T extends Record<string, any> = {}, P = keyof T> {
    [P: string]: any;

    constructor(scope: T) {
        for (const key in scope) {
            (this as any)[key] = scope[key];
        }
    }

    toObject() {
        const result: Record<string, any> = {};
        for (let key in this) {
          if (!this.hasOwnProperty(key)) {
            continue;
          }
          const value = (this as any)[key];
          if (value instanceof Scope) {
            result[key] = (value as any).toObject();
          } else if (Array.isArray(value)) {
            result[key] = value[0]; // state & reducer
          }
        }

        return result;
      }

}