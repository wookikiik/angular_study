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

  constructor() {
    // this.citySubject = new BehaviorSubject<City>(null);
    // this.cityData$ = this.citySubject.asObservable();

    // this.weatherSubject = new BehaviorSubject<Weather>(null);
    // this.weatherData$ = this.weatherSubject.asObservable();
  }

  initCityData(): Observable<City> {
    return this.cityData$;
  }

  initWeatherData(): Observable<Weather> {
    return this.weatherData$;
  }

}
