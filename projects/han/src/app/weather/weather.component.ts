import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  ) { }

  ngOnInit(): void {
    this.cityService
      .getCurrentLocationId()
      .subscribe(locationId => {
        this.weather$ = this.weatherService.fetchWeather(locationId);
      });
  }
}
