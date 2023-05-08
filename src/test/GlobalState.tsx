// import React, { useState } from 'react';

// import type { Dispatch, SetStateAction } from 'react';

// export type StateValueType<T> = T | (() => T);
// export type SetStateType<T> = Dispatch<SetStateAction<T>>
// export type StateTupleType<T> = [T, SetStateType<T>];
// export type ScopeStatesType<T> = { [P in keyof T]: [T[P], SetStateType<T[P]>] };
// export type ReducerTupleType<T, D> = [T, React.Dispatch<D>];

// const isFunction = (s: any): s is Function => {
//     return typeof s === 'function';
// }

// export const createGlobalState = <S,>(name: string, initialState: S | (() => S)) => {

//     const init = isFunction(initialState) ? initialState() : initialState;

//     const Context = React.createContext<StateTupleType<S>>([init, () => {}]);

//     const ContextNode: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
//         const state = useState(initialState);

//         return (
//             <Context.Provider value={state}>
//                 {children}
//             </Context.Provider>
//         );
//     };

//     return React.memo(ContextNode);
// };

// export const useGlobalState = <T,>(name: string): StateTupleExtendedType<T> => {
//     return useContext(Context);
// };
