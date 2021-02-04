import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../../core/services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  title = 'Counter Component';
  count$: Observable<number>;

  constructor(private counterService: CounterService) {
    this.count$ = this.counterService.getObservableCounter();
  }

  plus(): void {
    this.counterService.excute(1);
  }

  minus(): void {
    this.counterService.excute(-1);
  }
}
