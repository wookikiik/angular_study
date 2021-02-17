import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WeatherCondition } from '../enums';
import { Weather } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherSubject: BehaviorSubject<Weather> = new BehaviorSubject<Weather>(null);
  private weather$: Observable<Weather> = this.weatherSubject.asObservable();
  private PREFIX = '/weather';

  constructor(private apiService: ApiService) { }

  public fetchWeather(locationId: number): Observable<Weather> {
    this.apiService
      .get(`${this.PREFIX}?woeid=${locationId}`)
      .subscribe(weather => {
        this.weatherSubject.next(this.fromJsonToWeather(weather));
      });
    return this.weather$;
  }

  public getWeather(): Weather {
    return this.weatherSubject.getValue();
  }

  public getCurrentWeather(): Observable<Weather> {
    return this.weather$;
  }

  private fromJsonToWeather(json: { [key: string]: any }): Weather {
    const consolidatedWeather = json[0].consolidated_weather[0];
    const convertedWeather = {
      condition: this.mapStringToWeatherCondition(consolidatedWeather.weather_state_abbr),
      formattedCondition: consolidatedWeather.weather_state_name,
      abbreviationCondition: consolidatedWeather.weather_state_abbr,
      temp: consolidatedWeather.the_temp,
      minTemp: consolidatedWeather.min_temp,
      maxTemp: consolidatedWeather.max_temp,
      locationId: json[0].woeid,
      lastUpdated: new Date(),
      location: json[0].title
    } as Weather;
    console.log('convertedWeather', convertedWeather);
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
