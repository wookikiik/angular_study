import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City, Weather } from '../core/models';
import { WeatherService } from '../core/services';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  cityData$: Observable<City>;
  weatherData$: Observable<Weather>;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.cityData$ = this.weatherService.initCityData();
    this.weatherData$ = this.weatherService.initWeatherData();
  }

  viewCityData(cityData: Observable<City>): void {
    this.cityData$ = cityData;
  }

  viewWeatherData(weatherData: Observable<Weather>): void {
    this.weatherData$ = weatherData;
  }
}
