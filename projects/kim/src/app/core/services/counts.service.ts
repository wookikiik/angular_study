import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CountsService {
    countSubject = new BehaviorSubject(0);
    count$ = this.countSubject.asObservable();

    public getCurrentCount() {
        return this.count$;
    }

    public excuteCount(excuteValue) {
        this.countSubject.next(this.getCurrentValue() + excuteValue)
    }

    public getCurrentValue() {
        return this.countSubject.getValue();
    }
}