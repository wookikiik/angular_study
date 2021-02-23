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

  constructor(private apiService: ApiService) { }

  setWeatherData(locationId: number): void {
    this.apiService.getWeahterData(locationId)
      .subscribe(json => {
        const weahterJson = json.consolidated_weather[0];
        this.weatherSubject.next({
          condition: this.mapStringToWeatherCondition(weahterJson.weather_state_abbr),
          formattedCondition: weahterJson.weather_state_name,
          minTemp: weahterJson.min_temp,
          maxTemp: weahterJson.max_temp,
          Temp: weahterJson.the_temp,
          updateDate: new Date(),
          location: json.title,
        });
      });
  }

  mapStringToWeatherCondition(input: string): WeatherCondition {
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
