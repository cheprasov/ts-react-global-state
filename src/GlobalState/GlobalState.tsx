import React, { useContext, Context, useState } from 'react';

const contextByName = new Map<string, Context<any>>();
const statusMapByName = new Map<string, Map<string, [any, any]>>();

const createUseStateHack = (obj: Record<string, any>) => {
    const body: string[] = [];
    for (const key in obj) {
        const k = JSON.stringify(key);
        body.push(`map.set(${k}, useState(obj[${k}]));`);
      }
    return new Function('obj', 'map', 'useState', body.join('\n'));
}

export const createGlobalState = (name: string, obj: Record<string, any>) => {
  const Context = React.createContext(obj);
  contextByName.set(name, Context);

  const statusMap = statusMapByName.get(name) || new Map<string, [any, any]>();
  if (!statusMapByName.has(name)) {
    statusMapByName.set(name, statusMap);
  }

  const FC: React.FC<any> = ({ children }) => {
    const objValue: Record<string, any> = {};
    const stateHackFunct = createUseStateHack(obj);
    stateHackFunct(obj, statusMap, useState);
    // for (const key in obj) {
    //   const [v, s] = useState(obj[key]);
    //   statusMap.set(key, [v, s]);
    //   objValue[key] = v;
    // }
    statusMap.forEach((value, key) => {
        objValue[key] = value;
    });
    return (
      <Context.Provider value={objValue}>
        {children}
      </Context.Provider>
    );
  }
  return FC;
};

export const useGlobalState = (name: string, ...keys: string[]) => {
  const context = useContext(contextByName.get(name) as Context<any>);
  const statusMap = statusMapByName.get(name) || new Map();
  const statuses: any[] = [];
  keys.forEach((key) => {
    return statuses.push(...statusMap.get(key) as any[]);
  })
  return statuses;
}