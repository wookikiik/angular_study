import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CounterSign } from '../enums/countersign';
import { EXCUTEVALUE } from './counter.service.provider';

@Injectable({
    providedIn: 'root'
})
export class CounterService {

    private certifiedValue = 5;
    private excuteValue = 1;
    private countSubject = new BehaviorSubject(0);

    count$ = this.countSubject.asObservable();

    constructor(@Inject(EXCUTEVALUE) @Optional() excuteValue: number) {
        this.excuteValue = excuteValue ? excuteValue : this.excuteValue;
    }

    private getCurrentValue(): number {
        return this.countSubject.getValue();
    }

    excuteCounter(sign: CounterSign): void {
        CounterSign.Plus === sign ?
            this.countSubject.next(this.getCurrentValue() + this.excuteValue) :
            this.countSubject.next(this.getCurrentValue() - this.excuteValue);
    }

    isAuthedCount(): Observable<boolean> {
        return this.count$.pipe(take(1), map(countValue => (countValue >= this.certifiedValue)));
    }

}
