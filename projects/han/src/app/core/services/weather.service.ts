import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiConstants } from '../../shared/constants';
import { WeatherCondition } from '../enums';
import { Weather } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherSubject: Subject<Weather> = new Subject<Weather>();
  private weather$: Observable<Weather> = this.weatherSubject.asObservable();

  constructor(private apiService: ApiService) { }

  public fetchWeather(locationId: number): Observable<Weather> {
    this.apiService
      .get(`${ApiConstants.SEARCH_WEATHER_PREFIX}/${locationId}`)
      .subscribe(weather => {
        this.weatherSubject.next(this.fromJsonToWeather(weather));
      });
    return this.weather$;
  }

  private fromJsonToWeather(json: { [key: string]: any }): Weather {
    const consolidatedWeather = json.consolidated_weather[0];
    const convertedWeather = {
      condition: this.mapStringToWeatherCondition(consolidatedWeather.weather_state_abbr),
      formattedCondition: consolidatedWeather.weather_state_name,
      abbreviationCondition: consolidatedWeather.weather_state_abbr,
      temp: consolidatedWeather.the_temp,
      minTemp: consolidatedWeather.min_temp,
      maxTemp: consolidatedWeather.max_temp,
      locationId: json.id,
      lastUpdated: new Date(),
      location: json.title
    } as Weather;
    return convertedWeather;
  }

  private mapStringToWeatherCondition(input: string): WeatherCondition {
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
