import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Weather } from '../core/models';
import { CityService } from '../core/services/city.service';
import { WeatherService } from '../core/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather$: Observable<Weather>;

  constructor(
    private cityService: CityService,
    private weatherService: WeatherService
  ) {
    this.weather$ = weatherService.getCurrentWeather();
  }

  ngOnInit(): void {
    this.cityService
      .getCurrentCity()
      .pipe(
        map(city => city.woeid),
        take(1)
      )
      .subscribe(this.weatherService.fetchWeather);
  }
}
