import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { EXCUTEVALUE } from './counter.service.provider';

@Injectable({
    providedIn: 'root'
})
export class CounterService {

    private excuteValue: number;
    private countSubject = new BehaviorSubject(0);

    count$ = this.countSubject.asObservable();

    constructor(@Inject(EXCUTEVALUE) @Optional() excuteValue: number) {
        this.excuteValue = excuteValue ? excuteValue : 1;
    }

    private getCurrentValue(): number {
        return this.countSubject.getValue();
    }

    excuteCounter(triggrCount: number): void {
        this.countSubject.next(this.getCurrentValue() + (this.excuteValue * triggrCount));
    }

    getAuth(): Observable<boolean> {
        return this.count$.pipe(map(countValue => (countValue >= 5) ? true : false), take(1));
    }

}
