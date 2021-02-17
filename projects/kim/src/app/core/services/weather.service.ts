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
  weatherData$: Observable<Weather> = this.weatherSubject.asObservable();

  constructor(
    private apiService: ApiService,
  ) { }

  getWeatherData(): Observable<Weather> {
    return this.weatherData$;
  }

  setWeatherData(): void {
    const WEATHERDATA: Weather = {
      condition: WeatherCondition.clear,
      minTemp: 10,
      maxTemp: 20,
      Temp: 15,
      updateDate: new Date(),
      location: 'Seoul',
      locationId: 1132599
    };
    this.weatherSubject.next(WEATHERDATA);
  }
}
