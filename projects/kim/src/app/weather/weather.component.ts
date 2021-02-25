import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TemperatureUnit } from '../core/enums';
import { Weather } from '../core/models';
import { CityService, TemperatureService, WeatherService } from '../core/services';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather$: Observable<Weather>;
  temperatureUnit: TemperatureUnit;
  constructor(
    private weatherService: WeatherService,
    private temperatureService: TemperatureService,
    private cityService: CityService
  ) { }

  ngOnInit(): void {
    this.weather$ = this.weatherService.weather$;
    this.temperatureUnit = this.temperatureService.temperatureUnit;
    this.cityService.city$.subscribe(city => {
      if (city !== null) { this.weatherService.fetchWeather(city.woeid); }
    });
  }

}
