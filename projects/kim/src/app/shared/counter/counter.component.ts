import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../../core';

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

  clickCount(triggrCount: number): void {
    this.counterService.excuteCounter(triggrCount);
  }

}
