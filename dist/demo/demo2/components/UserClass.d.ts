import React from 'react';
import { GlobalStateType } from '../../src/GlobalState/GlobalState';
import { ConfigScopeInf, UserScopeInf } from '../types';
interface UserProps {
    role: string;
    userGlobalState?: GlobalStateType<UserScopeInf>;
    configGlobalState?: GlobalStateType<ConfigScopeInf>;
}
export default class UserClass extends React.Component<React.PropsWithChildren<UserProps>> {
    decrementAge: () => void;
    increaseAge: () => void;
    render(): JSX.Element;
}
export declare const UserClassWithGlobalState: any;
export {};
