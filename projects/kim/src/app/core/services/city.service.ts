import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { City } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  citySubject: BehaviorSubject<City> = new BehaviorSubject<City>(null);
  city$: Observable<City> = this.citySubject.asObservable();

  constructor(private apiService: ApiService) { }

  searchCity(cityName: string): void {
    if (cityName) {
      this.apiService.get('/api/location/search?query=', cityName)
        .subscribe(JsonArray => this.citySubject.next(this.convertCityJson(JsonArray)));
    }
  }

  convertCityJson(cityJsonArray: { [key: string]: any }): City {
    const cityArray = cityJsonArray[0];
    return {
      title: cityArray.title,
      woeid: cityArray.woeid
    };
  }
}
