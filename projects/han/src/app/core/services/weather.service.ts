import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WeatherCondition } from '../enums';
import { Weather } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherSubject: BehaviorSubject<Weather> = new BehaviorSubject<Weather>({
    condition: WeatherCondition.unknown,
    formattedCondition: '',
    temp: 0,
    minTemp: 0,
    maxTemp: 0,
    locationId: 0,
    lastUpdated: new Date(),
    location: '',
  });
  private weather$: Observable<Weather> = this.weatherSubject.asObservable();

  constructor(
    private apiService: ApiService) { }

  fetchWeather(locationId: string): Observable<Weather> {
    this.apiService
      .get(`/api/location/${locationId}`)
      .subscribe(weather => {
        this.weatherSubject.next(this.fromJsonToWeather(weather));
      });
    return this.weather$;
  }

  private fromJsonToWeather(json: any) {
    return {

    } as Weather;
  }

  private mapStringToWeatherCondition(input: string) {
    let state: WeatherCondition;
    switch (input) {
      case 'sn':
        state = WeatherCondition.snow;
        break;
      case 'sl':
        state = WeatherCondition.sleet;
        break;
      case 'h':
        state = WeatherCondition.hail;
        break;
      case 't':
        state = WeatherCondition.thunderstorm;
        break;
      case 'hr':
        state = WeatherCondition.heavyRain;
        break;
      case 'lr':
        state = WeatherCondition.lightRain;
        break;
      case 's':
        state = WeatherCondition.showers;
        break;
      case 'hc':
        state = WeatherCondition.heavyCloud;
        break;
      case 'lc':
        state = WeatherCondition.lightCloud;
        break;
      case 'c':
        state = WeatherCondition.clear;
        break;
      default:
        state = WeatherCondition.unknown;
    }
    return state;
  }
}
