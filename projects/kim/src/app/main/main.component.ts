import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {
  CountsService
} from '../core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
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
