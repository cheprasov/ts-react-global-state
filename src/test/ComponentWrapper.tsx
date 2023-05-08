// import React, { useMemo } from 'react';

// export interface ComponentWrapperProps {
//     components: React.ComponentType<any>[];
// }

// const ComponentWrapper: React.FC<React.PropsWithChildren<ComponentWrapperProps>> = ({ components, children }) => {
//     return useMemo(() => {
//         const items = [...components];
//         let wrap: any = children;
//         while (items.length > 0) {
//             const Component = items.pop() as React.ComponentType<any>;
//             wrap = (
//                 <Component>{wrap}</Component>
//             );
//         }
//         return (<>{wrap}</>);
//     }, [children, components])
// };

// export default React.memo(ComponentWrapper);