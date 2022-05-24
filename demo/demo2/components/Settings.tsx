import React from 'react';
import { useGlobalState } from '../../../src/GlobalState/GlobalState';
import { AppNestedScopeInf } from '../types';
import Value from './Value';


const priceTypeList: string[] = ['perPerson', 'total'];

const Settings: React.FC = () => {
    const settingsState = useGlobalState<AppNestedScopeInf['app']['settings']>('settings');
    const [ priceType, setPriceType ] = settingsState.priceType;

    return (
        <div>
            Settings <br />
            <Value name='Price Type' value={priceType} list={priceTypeList} onChange={setPriceType} />
        </div>
    );
}

export default React.memo(Settings);