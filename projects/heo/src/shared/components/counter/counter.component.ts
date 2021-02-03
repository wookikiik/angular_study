import { Component, OnInit } from '@angular/core';
import { CounterService } from '@heo/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(
    private counter: CounterService
  ) {
    this.count$ = this.counter.count$;
  }

  count$: Observable<number>;

  ngOnInit(): void {
  }

  onIncrement(): void {
    this.counter.increment();
  }

  onDecrement(): void {
    this.counter.decrement();
  }
}
