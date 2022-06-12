import React, { useCallback } from 'react';

export interface ValueProps{
    list: string[];
    name: string;
    value: string;
    onChange: (value: string) => void;
};

const Value: React.FC<ValueProps> = ({ list, name, value, onChange }) => {

    const update = useCallback(() => {
        const currentIndex = list.indexOf(value);
        let newIndex = currentIndex;
        while (newIndex === currentIndex) {
            newIndex = Math.round(Math.random() * (list.length - 1));
        }
        onChange(list[newIndex]);
    }, [value, list, onChange]);

    return (
        <div>
            {name}: {value} <button onClick={update}>Update</button>
        </div>
    );
}

export default React.memo(Value);