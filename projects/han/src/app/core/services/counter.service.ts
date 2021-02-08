import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { COUNTER_UNIT } from '../provider/counter.unit.provider';

@Injectable({
  providedIn: 'root',
})
export class CounterService {

  private counterSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private count$ = this.counterSubject.asObservable();

  constructor(@Inject(COUNTER_UNIT) @Optional() private unit?: number) {
    this.unit = unit ? unit : 1;
  }

  public plusExcute(): void {
    this.counterSubject.next(this.getCurrentValue() + this.unit);
  }

  public minusExcute(): void {
    this.counterSubject.next(this.getCurrentValue() - this.unit);
  }

  private getCurrentValue(): number {
    return this.counterSubject.getValue();
  }

  public getObservableCounter(): Observable<number> {
    return this.count$;
  }
}
