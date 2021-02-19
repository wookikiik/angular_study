import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-count-auth',
  templateUrl: './counter-auth.component.html'
})
export class CounterAuthComponent implements OnInit {
  private countValue: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.countValue = data.excuteValue);
  }

}
