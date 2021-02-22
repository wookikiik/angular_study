import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../../core';
import { CounterSign } from '../../core/enums/countersign';

@Component({
  selector: 'app-count',
  templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.count$ = this.counterService.count$;
  }

  clickMinusCount(): void {
    this.counterService.excuteCounter(CounterSign.Minus);
  }

  clickPlusCount(): void {
    this.counterService.excuteCounter(CounterSign.Plus);
  }
}
