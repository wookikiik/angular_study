import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counterSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private count$ = this.counterSubject.asObservable();

  public excute(addValue: number): void {
    this.counterSubject.next(this.getCurrentValue() + addValue);
  }

  private getCurrentValue(): number {
    return this.counterSubject.getValue();
  }

  public getObservableCounter(): Observable<number> {
    return this.count$;
  }
}
