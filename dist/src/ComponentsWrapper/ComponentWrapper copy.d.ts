import React from 'react';
export interface ComponentWrapperProps {
    components: React.ComponentType<any>[];
    type?: 'inside' | 'outside';
}
declare const _default: React.NamedExoticComponent<React.PropsWithChildren<ComponentWrapperProps>>;
export default _default;
