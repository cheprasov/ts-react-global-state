import React from 'react';
import { useGlobalScope } from '../../../src/GlobalState/GlobalState';
import { ConfigScopeInf, UserScopeInf } from '../types';
import UserClass from './UserClass';

const WrappedUserClass: React.FC<React.PropsWithChildren<{}>> = ({ children = undefined }) => {
    const configGlobalScope = useGlobalScope<ConfigScopeInf>('config');
    const userGlobalScope = useGlobalScope<UserScopeInf>('user');

    return (
        <UserClass
            role='Admin'
            userGlobalScope={userGlobalScope}
            configGlobalScope={configGlobalScope}
        >
            {children}
        </UserClass>
    );
}

export default WrappedUserClass;