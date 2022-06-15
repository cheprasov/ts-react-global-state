import React from 'react';
import { GlobalScopeType } from '../../../src/GlobalState/GlobalState';
import { ConfigScopeInf, UserScopeInf } from '../types';
interface UserProps {
    role: string;
    userGlobalScope?: GlobalScopeType<UserScopeInf>;
    configGlobalScope?: GlobalScopeType<ConfigScopeInf>;
}
export default class UserClass extends React.Component<React.PropsWithChildren<UserProps>> {
    decrementAge: () => void;
    increaseAge: () => void;
    render(): JSX.Element;
}
export declare const UserClassWithGlobalScope: React.FC<React.PropsWithChildren<UserProps>>;
export {};
