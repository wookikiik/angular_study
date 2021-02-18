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

  constructor(
    private apiService: ApiService,
  ) { }

  searchCity(cityName: string): void {
    /*
    apiService 추가
    https://www.metaweather.com/api/location/search/?query=$cityName
    */
    this.citySubject.next({
      title: 'Seoul',
      woeid: 1132599
    });
  }

}
