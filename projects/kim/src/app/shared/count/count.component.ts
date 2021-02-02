import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {
  CountService
} from '../../core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  count$: Observable<number>;

  constructor(
    private countService: CountService,
  ) {}

  ngOnInit() {
    this.count$ = this.countService.getCurrentCount();
  }

  clickMinusCount() {
    this.countService.excuteCount(-1);
  }
  
  clickPlusCount() {
    this.countService.excuteCount(1);
  }
}
