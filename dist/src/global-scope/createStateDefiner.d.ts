import { useState } from 'react';
import { TStateTupleExtended } from './types';
export declare const createStateDefiner: (obj: Record<string, any>) => (obj: Record<string, any>, use: typeof useState) => Record<string, TStateTupleExtended<any>>;
