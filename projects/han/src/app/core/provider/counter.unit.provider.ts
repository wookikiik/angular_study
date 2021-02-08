import { InjectionToken } from '@angular/core';
export const COUNTER_UNIT = new InjectionToken<number>('counter unit number');

export function counterUnitFactory(unit: number): () => void {
    // difficulty logics...
    return () => unit;
}

