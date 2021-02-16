import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Weather } from '../core/models';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather$: Observable<Weather>;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('weathercomponent', this.route.data);
  }
}
