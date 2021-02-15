import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Weather } from '../core/models';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: Weather;

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.data
      .pipe(map(data => data.weather))
      .subscribe(weather => {
        this.weather = weather;
      });
  }

  ngOnInit(): void {
  }

}
