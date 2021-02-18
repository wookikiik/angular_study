import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { City } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private citySubject: BehaviorSubject<City> = new BehaviorSubject<City>(null);
  private city$: Observable<City> = this.citySubject.asObservable();
  private API_PREFIX = '/api/location/search';

  constructor(private apiService: ApiService) { }

  public fetchCityByName(cityName: string): Observable<City> {
    this.apiService
      .get(`${this.API_PREFIX}?query=${cityName.toLowerCase()}`)
      .pipe(
        take(1),
        map(data => this.fromJsonToCity(data))
      ).subscribe(city => {
        this.citySubject.next(city);
      });
    return this.city$;
  }

  public getCurrentCity(): Observable<City> {
    return this.city$;
  }

  public getCurrentLocationId(): Observable<number> {
    return this.city$.pipe(
      take(1),
      map(city => city.woeid)
    );
  }

  private fromJsonToCity(json: { [key: string]: any }): City {
    const cityJson = json[0];
    return {
      title: cityJson.title,
      woeid: cityJson.woeid
    } as City;
  }
}
