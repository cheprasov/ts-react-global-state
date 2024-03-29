import React from 'react';
import { TAppUseScope } from '../types';
import Value from './Value';
import { useGlobalScope } from '../../../src';


const priceTypeList: string[] = ['perPerson', 'total'];

const Settings: React.FC = () => {
    const settingsState = useGlobalScope<TAppUseScope['app']['settings']>('app.settings');
    const [ priceType, setPriceType ] = settingsState.priceType;

    return (
        <div>
            Settings <br />
            <Value name='Price Type' value={priceType} list={priceTypeList} onChange={setPriceType} />
        </div>
    );
}

export default React.memo(Settings);