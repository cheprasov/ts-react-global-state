import React from 'react';
import { AppNestedScopeInf } from '../types';
import Value from './Value';
import { useGlobalScope } from '../../../src/GlobalState/useGlobalScope';


const priceTypeList: string[] = ['perPerson', 'total'];

const Settings: React.FC = () => {
    const settingsState = useGlobalScope<AppNestedScopeInf['app']['settings']>('settings');
    const [ priceType, setPriceType ] = settingsState.priceType;

    return (
        <div>
            Settings <br />
            <Value name='Price Type' value={priceType} list={priceTypeList} onChange={setPriceType} />
        </div>
    );
}

export default React.memo(Settings);