import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EXCUTEVALUE } from './counter.service.provider';

@Injectable({
    providedIn: 'root'
})
export class CounterService {
    countSubject = new BehaviorSubject(0);
    count$ = this.countSubject.asObservable();
    excuteValue: number;

    constructor(@Inject(EXCUTEVALUE) @Optional() excuteValue: number) {
        this.excuteValue = excuteValue ? excuteValue : 1;
    }

    getCurrentCount(): Observable<number> {
        return this.count$;
    }

    excuteMinusCount(): void {
        this.countSubject.next(this.getCurrentValue() - this.excuteValue);
    }

    excutePlusCount(): void {
        this.countSubject.next(this.getCurrentValue() + this.excuteValue);
    }

    private getCurrentValue(): number {
        return this.countSubject.getValue();
    }
}
