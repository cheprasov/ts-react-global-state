import { useState } from 'react';
import { stringify } from '../string/stringify';
import { Scope } from './Scope';
import { TStateTupleExtended } from './types';

export const createStateDefiner = (obj: Record<string, any>) => {
    const body: string[] = [`var n = {};`];
    for (const key in obj) {
        if (!obj.hasOwnProperty(key)
            || obj[key] instanceof Scope
        ) {
            continue;
        }
        const k = stringify(key);
        body.push(`n[${k}] = useState(o[${k}]);`);
        body.push(`n[${k}].value = n[${k}][0];`);
        body.push(`n[${k}].setValue = n[${k}][1];`);
        //body.push(`n[${k}].globalState = true;`);
    }
    body.push('return n;');
    return new Function('o', 'useState', body.join('\n')) as (
        (obj: Record<string, any>, use: typeof useState) => Record<string, TStateTupleExtended<any>>
    );
}