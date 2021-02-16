import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../core/models';
import { WeatherService } from '../core/services';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  cityData$: Observable<City>;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.cityData$ = this.weatherService.initCitydata();
  }

  viewCityData(cityData): void {
    this.cityData$ = cityData;
  }
}
