import React from 'react';
import { useGlobalState } from '../../../src/GlobalState/GlobalState';
import { ConfigScopeInf, UserScopeInf } from '../types';
import UserClass from './UserClass';

const WrappedUserClass: React.FC<React.PropsWithChildren<{}>> = ({ children = undefined }) => {
    const configGlobalState = useGlobalState<ConfigScopeInf>('config');
    const userGlobalState = useGlobalState<UserScopeInf>('user');

    return (
        <UserClass
            role='Admin'
            userGlobalState={userGlobalState}
            configGlobalState={configGlobalState}
        >
            {children}
        </UserClass>
    );
}

export default WrappedUserClass;