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
  ) { }

  ngOnInit(): void {
    this.count$ = this.countService.getCurrentCount();
  }

  clickMinusCount(): void {
    this.countService.excuteCount(-1);
  }

  clickPlusCount(): void {
    this.countService.excuteCount(1);
  }
}
