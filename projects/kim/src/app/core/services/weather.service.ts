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

  fetchWeather(locationId: number): void {
    this.apiService.get('/api/location/', locationId)
      .subscribe(JsonArray => { this.weatherSubject.next(this.convertWeatherJson(JsonArray)); });
  }

  convertWeatherJson(weatherJsonArray: { [key: string]: any }): Weather {
    const weahterJsonArray = weatherJsonArray.consolidated_weather[0];
    return {
      condition: this.mapStringToWeatherCondition(weahterJsonArray.weather_state_abbr),
      formattedCondition: weahterJsonArray.weather_state_name,
      minTemp: weahterJsonArray.min_temp,
      maxTemp: weahterJsonArray.max_temp,
      Temp: weahterJsonArray.the_temp,
      updateDate: new Date(),
      location: weatherJsonArray.title
    };
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
