import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WeatherCondition } from '../enums';
import { MOCK_WEATHER, Weather } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherSubject: BehaviorSubject<Weather>;
  private weather$: Observable<Weather>;

  constructor(private apiService: ApiService) {
    this.weatherSubject = new BehaviorSubject<Weather>({
      condition: null,
      formattedCondition: '',
      temp: 0,
      minTemp: 0,
      maxTemp: 0,
      locationId: 0,
      lastUpdated: null,
      location: ''
    });
    this.weather$ = this.weatherSubject.asObservable();
  }

  public fetchWeather(locationId: number): Observable<Weather> {
    /*
    this.apiService
      .get(`/api/location/${locationId}`)
      .subscribe(weather => {
        this.weatherSubject.next(this.fromJsonToWeather(weather));
      });
    */
    this.weatherSubject.next(this.fromJsonToWeather(MOCK_WEATHER));
    return this.weather$;
  }

  public getCurrentWeather(): Observable<Weather> {
    return this.weather$;
  }

  private fromJsonToWeather(json: any): Weather {
    const consolidatedWeather = json.consolidated_weather[0];
    return {
      condition: this.mapStringToWeatherCondition(consolidatedWeather.weather_state_abbr),
      formattedCondition: consolidatedWeather.weather_state_name,
      temp: consolidatedWeather.the_temp,
      minTemp: consolidatedWeather.min_temp,
      maxTemp: consolidatedWeather.max_temp,
      locationId: json.woeid,
      lastUpdated: new Date(),
      location: json.title
    } as Weather;
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
