import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WeatherCondition } from '../enums';
import { Weather } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherSubject: BehaviorSubject<Weather> = new BehaviorSubject<Weather>(null);
  weather$: Observable<Weather> = this.weatherSubject.asObservable();

  constructor(
    private apiService: ApiService,
  ) { }

  setWeatherData(locationId: number): void {
    /*
    apiService 추가
    https://www.metaweather.com/api/location/$locationId
    */
    this.weatherSubject.next({
      condition: WeatherCondition.snow,
      formattedCondition: 'Showers',
      minTemp: 10,
      maxTemp: 20,
      Temp: 15,
      updateDate: new Date(),
      location: 'Seoul',
    });
  }
}
