import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WeatherCondition } from '../enums';
import { City, Weather } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  citySubject: BehaviorSubject<City> = new BehaviorSubject<City>(null);
  cityData$: Observable<City> = this.citySubject.asObservable();

  weatherSubject: BehaviorSubject<Weather> = new BehaviorSubject<Weather>(null);
  weatherData$: Observable<Weather> = this.weatherSubject.asObservable();

  constructor() { }

  getCityData(): Observable<City> {
    return this.cityData$;
  }

  setCityData(): void {
    const CITYDATA: City = {
      title: 'Seoul',
      woeid: '1132599'
    };
    this.citySubject.next(CITYDATA);
  }

  getWeatherData(): Observable<Weather> {
    return this.weatherData$;
  }

  setWeatherData(): void {
    const WEATHERDATA: Weather = {
      condition: WeatherCondition.clear,
      minTemp: 10,
      maxTemp: 20,
      Temp: 15,
      updateDate: new Date()
    };
    this.weatherSubject.next(WEATHERDATA);
  }

}
