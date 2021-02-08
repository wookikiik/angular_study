import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CounterService {
    countSubject = new BehaviorSubject(0);
    count$ = this.countSubject.asObservable();

    getCurrentCount(): Observable<number> {
        return this.count$;
    }

    excuteCount(excuteValue): void {
        this.countSubject.next(this.getCurrentValue() + excuteValue);
    }

    private getCurrentValue(): number {
        return this.countSubject.getValue();
    }
}
