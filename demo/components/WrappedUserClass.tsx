import React from 'react';
import { useGlobalState } from '../../src/GlobalState/GlobalState';
import { UserScopeInf } from '../types';
import UserClass from './UserClass';

const WrappedUserClass = ({ children = undefined }) => {
    const userGlobalState = useGlobalState<UserScopeInf>('user');

    return (
        <UserClass userGlobalState={userGlobalState}>{children}</UserClass>
    );
}

export default WrappedUserClass;