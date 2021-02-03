import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private countSubject = new BehaviorSubject<number>(0);
  count$  = this.countSubject.asObservable();

  constructor() { }

  increment(incrementCount: number = 1): void{
    this.countSubject.next(this.getCurrentCountValue() + incrementCount);
  }

  decrement(decrementCount: number = -1): void{
    this.countSubject.next(this.getCurrentCountValue() + decrementCount);
  }

  private getCurrentCountValue(): number{

    let currentCount = 0;

    // > case 1
    this.count$.pipe(
      take(1)
    ).subscribe(count =>   currentCount = count);
    return currentCount;

    /*
      > case 2
      this.count$.subscribe(count =>   currentCount = count).unsubscribe();
      return currentCount;

      > case 3
      return this.countSubject.getValue();
    */
  }
}
