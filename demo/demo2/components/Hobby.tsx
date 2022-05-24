import React from 'react';
import Value, { ValueProps } from './Value';

export type HobbyProps = Omit<ValueProps, 'list'>;

const levels: string[] = ['beginner', 'advanced', 'expert', 'master', 'guru'];

const Hobby: React.FC<HobbyProps> = ({ name, value, onChange}) => {
    return (
        <Value name={name} value={value} onChange={onChange} list={levels} />
    );
}

export default React.memo(Hobby);