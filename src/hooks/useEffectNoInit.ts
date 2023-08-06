import React, { EffectCallback, DependencyList, useRef } from 'react';
import { useEffect } from 'react';

export const useEffectNoInit = (useEffectCallback: EffectCallback, deps: DependencyList) => {

    const initRef = useRef<boolean>(true);

    useEffect(() => {
        if (initRef.current === true) {
            initRef.current = false;
            return;
        }
        return useEffectCallback();
    }, [...deps, initRef])

};