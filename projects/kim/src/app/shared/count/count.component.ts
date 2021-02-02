import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {
  CountsService
} from '../../core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  count$: Observable<number>;

  constructor(
    private countsService: CountsService,
  ) {}

  ngOnInit() {
    this.count$ = this.countsService.getCurrentCount();
  }

  clickMinusCount() {
    this.countsService.excuteCount(-1);
  }
  
  clickPlusCount() {
    this.countsService.excuteCount(1);
  }
}
