import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../../core/services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  title = 'Counter Component';
  count$: Observable<number>;

  constructor(private counterService: CounterService) {
    this.count$ = this.counterService.getObservableCounter();
  }

  ngOnInit(): void {
    console.log('created CounterComponent!');
  }

  plus(): void {
    this.counterService.excute(1);
  }

  minus(): void {
    this.counterService.excute(-1);
  }
}
