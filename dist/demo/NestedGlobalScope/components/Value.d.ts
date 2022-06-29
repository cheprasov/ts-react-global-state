import React from 'react';
export interface ValueProps {
    list: string[];
    name: string;
    value: string;
    onChange: (value: string) => void;
}
declare const _default: React.NamedExoticComponent<ValueProps>;
export default _default;
