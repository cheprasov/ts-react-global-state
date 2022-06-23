import React from 'react';
import { ScopeStatesType } from '../../../src/GlobalState/types';
import { ConfigScopeInf, UserScopeInf } from '../types';
interface UserProps {
    role: string;
    userGlobalScope?: ScopeStatesType<UserScopeInf>;
    configGlobalScope?: ScopeStatesType<ConfigScopeInf>;
}
export default class UserClass extends React.Component<React.PropsWithChildren<UserProps>> {
    decrementAge: () => void;
    increaseAge: () => void;
    render(): JSX.Element;
}
export declare const UserClassWithGlobalScope: React.FC<React.PropsWithChildren<UserProps>>;
export {};
