import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CounterService
} from '../../core';


@Component({
  selector: 'app-count',
  templateUrl: './counter.component.html',
  providers: [CounterService]
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(
    private counterService: CounterService,
  ) { }

  ngOnInit(): void {
    this.count$ = this.counterService.getCurrentCount();
  }

  clickMinusCount(): void {
    this.counterService.excuteCount(-1);
  }

  clickPlusCount(): void {
    this.counterService.excuteCount(1);
  }
}
