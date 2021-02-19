import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiConstants } from '../../shared/constants';
import { City } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private citySubject: BehaviorSubject<City> = new BehaviorSubject<City>({} as City);
  private city$: Observable<City> = this.citySubject.asObservable();

  constructor(private apiService: ApiService) { }

  public fetchCityByName(cityName: string): Observable<City> {
    this.apiService
      .get(`${ApiConstants.SEARCH_CITY_PREFIX}?query=${cityName.toLowerCase()}`)
      .pipe(
        map(data => data.length === 0 ? {} as City : this.fromJsonToCity(data))
      ).subscribe(city => {
        this.citySubject.next(city);
      });
    return this.city$;
  }

  public getCurrentCity(): Observable<City> {
    return this.city$;
  }

  public getCurrentLocationId(): number {
    return this.citySubject.getValue().woeid;
  }

  private fromJsonToCity(jsonArray: [{ [key: string]: any }]): City {
    const cityJson = jsonArray[0];
    return {
      title: cityJson.title,
      woeid: cityJson.woeid
    } as City;
  }
}
