import React, { useCallback } from 'react';
import { TAppScope } from '../types';
import Value from './Value';
import { useGlobalScope } from '../../../src/global-scope/useGlobalScope';

const departureList: string[] = [
    'Any London Airport', 'London City', 'London Gatwick',
    'London Heathrow', 'London Luton', 'London Southend', 'London Stansted',
];

const destinationList: string[] = [
    'Paris', 'Amsterdam', 'Murmansk', 'Tokyo', 'Rome', 'Madrid',
];

const nightsList: string[] = Array(7).fill(0).map((v, i) => (i+1).toString());

const Search: React.FC = () => {
    const settingsState = useGlobalScope<TAppScope['app']['search']>('app.search');
    const [ departure, setDeparture ] = settingsState.departure;
    const [ destination, setDestination ] = settingsState.destination;
    const [ nights, setNights ] = settingsState.nights;
    const [ rooms, ] = settingsState.rooms;

    const setNightsCallback = useCallback((v: string) => {
        setNights(+v);
    }, [setNights]);

    return (
        <div>
            Search: <br />
            <Value name='Departure' value={departure} list={departureList} onChange={setDeparture} />
            <Value name='Destination' value={destination} list={destinationList} onChange={setDestination} />
            <Value name='Nights' value={nights.toString()} list={nightsList} onChange={setNightsCallback} />
        </div>
    );
}

export default React.memo(Search);