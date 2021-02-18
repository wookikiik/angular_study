import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../core/models';
import { CityService, WeatherService } from '../core/services';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather$: Observable<Weather>;

  constructor(
    private weatherService: WeatherService,
    private cityService: CityService
  ) { }

  ngOnInit(): void {
    this.weather$ = this.weatherService.weather$;
    this.cityService.city$.subscribe(city => {
      if (city !== null) { this.weatherService.setWeatherData(city.woeid); }
    });
  }

}
