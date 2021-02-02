import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CountService {
    countSubject = new BehaviorSubject(0);
    count$ = this.countSubject.asObservable();

    getCurrentCount() {
        return this.count$;
    }

    excuteCount(excuteValue) {
        this.countSubject.next(this.getCurrentValue() + excuteValue)
    }

    private getCurrentValue() {
        return this.countSubject.getValue();
    }
}