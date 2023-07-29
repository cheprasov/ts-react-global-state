// import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
// import ComponentWrapper from './ComponentWrapper';
// import Observer from '../../../common/observer/Observer';
// import { Nullable } from '../../../common/types/Nullable';
// import { useEffectNoInit } from '../hooks/useEffectNoInit';
// import { Object } from '@cheprasov/data-structures';

// export type TStateTuple<T> = [T, Nullable<(value: T) => void>];

// export type TProvider = React.FC<React.PropsWithChildren<{}>>;

// export class GSContext {

//     protected _stateContextByName: Map<string, React.Context<any>> = new Map();

//     protected _providers: TProvider[] = [];

//     protected readonly _observer: Observer<TProvider[]>;

//     protected initStates: Record<string, any>;

//     constructor(initStates: Record<string, any>) {
//         this._observer = new Observer();
//         this.initStates = initStates;

//         //this.init();
//     }

//     init () {
//         Object.Helper.forEach(this.initStates, (value, key) => {
//             this.getUseState(key, value);
//         });
//     }

//     protected addProvider (provider: TProvider) {
//         this._providers.push(provider);
//         this._observer.publish([...this._providers]);
//         console.log('(this._providers', this._providers);
//     }

//     subscribe(listener: (providers: TProvider[]) => void): () => void {
//         return this._observer.subscribe(listener);
//     }

//     getUseState<T>(name: string, initValue: T | (() => T)): TStateTuple<T> {
//         let Context: React.Context<TStateTuple<T>> | undefined = this._stateContextByName.get(name);
//         if (!Context) {
//             const value = typeof initValue === 'function' ? (initValue as any)() : initValue;
//             const NewContext = React.createContext([value, null]) as React.Context<TStateTuple<T>>;
//             this._stateContextByName.set(name, NewContext);
//             const Provider: TProvider = ({ children }) => {
//                 const state = useState(initValue);

//                 return (
//                     <NewContext.Provider value={state}>
//                         {children}
//                     </NewContext.Provider>
//                 );
//             };
//             Context = NewContext;

//             this.addProvider(Provider);
//         }
//         return useContext<TStateTuple<T>>(Context);
//     }
// }

// export const GlobalStateContext = React.createContext<GSContext>(new GSContext({}));

// export interface GlobalStateProviderProps extends React.PropsWithChildren {
//     gsContext: GSContext;
// }

// export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ gsContext, children }) => {

//     const [ providers, setProviders ] = useState<TProvider[]>([]);
//     const ref = useRef<boolean>();
//     if (!ref.current) {
//         ref.current = true;
//     }

//         gsContext.subscribe((updatedProviders) => {
//             console.log('updatedProviders', updatedProviders);
//             setProviders(updatedProviders);
//         });
//         gsContext.init();

//     // const listener = useCallback(async (updatedProviders: any) => {
//     //         console.log('updatedProviders', updatedProviders);
//     //         setProviders(updatedProviders);
//     //     },
//     //     [],
//     // );

//     // gsContext.subscribe(listener);

//     // const [unsubscribe, setUnsubscribe] = useState(() => {
//     //     return gsContext.subscribe((updatedProviders) => {
//     //         console.log('updatedProviders', updatedProviders);
//     //         setProviders(updatedProviders);
//     //     });
//     // });

//     useEffect(() => {
//         //unsubscribe();
//         //setUnsubscribe(
//         console.log('subscribedd');
//         gsContext.subscribe((updatedProviders) => {
//             console.log('updatedProviders', updatedProviders);
//             setProviders(updatedProviders);
//         })
//         //);
//     }, [gsContext]);

//     return (
//         <GlobalStateContext.Provider value={gsContext}>
//             <ComponentWrapper components={providers}>
//                 {children}
//             </ComponentWrapper>
//         </GlobalStateContext.Provider>
//     );
// }

// export const useGlobalState = <T,>(name: string, initValue: T | (() => T)): TStateTuple<T> => {
//     const gsContent = useContext(GlobalStateContext);
//     console.log(1);
//     return gsContent.getUseState(name, initValue);
// };