import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EXCUTEVALUE } from './counter.service.provider';

@Injectable({
    providedIn: 'root'
})
export class CounterService {

    private excuteValue: number;
    private countSubject = new BehaviorSubject(0);
    private isAuthenticatedSubject = new BehaviorSubject(false);

    count$ = this.countSubject.asObservable();
    isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

    constructor(@Inject(EXCUTEVALUE) @Optional() excuteValue: number) {
        this.excuteValue = excuteValue ? excuteValue : 1;
    }

    excuteCounter(excuteNumver: number): void {
        this.countSubject.next(this.getCurrentValue() + (this.excuteValue * excuteNumver));
        this.setAuth();
    }

    private setAuth(): void {
        this.isAuthenticatedSubject.next((this.getCurrentValue() >= 5) ? true : false);
    }

    private getCurrentValue(): number {
        return this.countSubject.getValue();
    }

}
