import { InjectionToken } from '@angular/core';

export const TOKENS = new InjectionToken<number>('ExcuteValue');

export const counterServiceFactory = () => {
    return (excuteValue: number) => {
        return excuteValue;
    };
};

export const CounterServiceProvider = {
    provide: TOKENS,
    useFactory: counterServiceFactory(),
    deps: ['excuteValue']
};

export const DevProvider = {
    provide: 'excuteValue',
    useValue: 5
};

