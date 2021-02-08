import { InjectionToken } from '@angular/core';

export const EXCUTEVALUE = new InjectionToken<number>('ExcuteValue');

const excuteValueFactory = () => {
    return (excuteValue: number) => {
        return excuteValue;
    };
};

export const ExcuteValueFactoryProvider = {
    provide: EXCUTEVALUE,
    useFactory: excuteValueFactory(),
    deps: ['excuteValue']
};

export const ExcuteValueProvider = {
    provide: 'excuteValue',
    useValue: 5
};
