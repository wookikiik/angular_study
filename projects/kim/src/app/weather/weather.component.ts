import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City, Weather } from '../core/models';
import { CityService } from '../core/services/city.service';
import { WeatherService } from '../core/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData$: Observable<Weather>;
  cityData$: Observable<City>;
  constructor(
    private weatherService: WeatherService,
    private cityService: CityService
  ) { }

  ngOnInit(): void {
    this.weatherData$ = this.weatherService.getWeatherData();
    this.cityService.getCityData().subscribe(city => {
      if (city !== null) { this.weatherService.setWeatherData(); }
    });
  }

}
