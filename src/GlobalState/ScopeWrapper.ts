import { Scope } from './Scope';
import { TStateTupleExtended } from './types';

export type TScopeValues<T> =
    // T extends GlobalReducer<any>
    //? (ReducerTupleExtendedType<T['initialState'], T['reducer']>)
    //: (
        T extends Array<any>
        ? TStateTupleExtended<T>
        : (
            T extends Scope
            ? {
                [P in keyof T]: TScopeValues<T[P]>
            } & ScopeMethods
            :  (
                [T] extends [boolean]
                ? TStateTupleExtended<boolean>
                : TStateTupleExtended<T>
            )
        )
    //)
    ;

interface ScopeMethods {
    toObject(): Record<string, any>;
    fromObject(obj: any): void;
}

interface IScopeWrapper {
    new <T>(data: T): TScopeValues<T>;
}

// export const ScopeWrapper = class <T extends {}> {

//     constructor(data: T) {
//         Object.assign(this, data)
//     }

//     toObject(this: T): Record<string, any> {
//         const result: Record<string, any> = {};

//         for (let key in this) {
//             if (!this.hasOwnProperty(key)) {
//                 continue;
//             }
//             const value = this[key];
//             if (isScopeInstance(value)) {
//                 result[key] = value.toObject();
//             } else if (isReducerTupleExtendedType<any, any>(value)) {
//                 result[key] = 'toObject' in value.stateValue ? value.stateValue.toObject() : value.stateValue;
//             } else if (isStateTupleExtendedType(value)) {
//                 result[key] = value.stateValue; // state & reducer
//             }
//         }

//         return result;
//     }

//     fromObject(this: T, obj: Record<string, any>): void {
//         if (typeof obj !== 'object' || !obj) {
//             return;
//         }
//         for (let key in this) {
//             if (!this.hasOwnProperty(key)) {
//                 continue;
//             }
//             if (!(key in obj)) {
//                 continue;
//             }
//             const objValue = obj[key];
//             const value = this[key];

//             if (isScopeInstance(value)) {
//                 value.fromObject(objValue);
//             } else if (isReducerTupleExtendedType<any, any>(value)) {
//                value.dispatchStateValue({ type: 'init', init: objValue });
//             } else if (isStateTupleExtendedType<typeof value>(value)) {
//                 value.setStateValue(objValue);
//             }
//         }
//     }

// } as IScopeWrapper;

// export const isScopeInstance = <T>(value: any): value is Scope<T> & ScopeMethods => {
//     return value instanceof Scope;
// }