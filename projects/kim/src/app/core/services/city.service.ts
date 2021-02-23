import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
    this.apiService.getLocationId(cityName)
      .pipe(map(json => {
        const cityJson = json[0];
        return {
          title: cityJson.title,
          woeid: cityJson.woeid
        };
      }))
      .subscribe(city => this.citySubject.next(city));
  }

}
