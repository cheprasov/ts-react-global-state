import React, { useMemo } from 'react';

export interface ComponentWrapperProps {
    components: React.ComponentType<any>[];
    type?: 'inside' | 'outside';
}

const ComponentWrapper: React.FC<React.PropsWithChildren<ComponentWrapperProps>> = ({ components, type = 'inside', children }) => {

    if (components.length === 0) {
        return (
            <>
                {children}
            </>
        );
    }

    const Component = components[0];

    if (components.length === 1) {
        return (
            <Component>
                {children}
            </Component>
        );
    }

    const nextComponents = useMemo(() => {
        return components.slice(1);
    }, [components]);

    if (type === 'inside') {
        return (
            <ComponentWrapper components={nextComponents} type={type}>
                <Component>
                    {children}
                </Component>
            </ComponentWrapper>
        );
    }

    return (
        <Component>
            <ComponentWrapper components={nextComponents} type={type}>
                {children}
            </ComponentWrapper>
        </Component>
    );

};

export default React.memo(ComponentWrapper);