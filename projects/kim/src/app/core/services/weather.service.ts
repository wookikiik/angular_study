import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { City, Weather } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  citySubject: BehaviorSubject<City> = new BehaviorSubject<City>(null);
  cityData$: Observable<City> = this.citySubject.asObservable();

  weatherSubject: BehaviorSubject<Weather> = new BehaviorSubject<Weather>(null);
  weatherData$: Observable<Weather> = this.weatherSubject.asObservable();

  constructor() { }

  initCityData(): Observable<City> {
    return this.cityData$;
  }

  initWeatherData(): Observable<Weather> {
    return this.weatherData$;
  }

}
