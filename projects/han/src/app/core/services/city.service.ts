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
      map(city => city.woeid),
      take(1)
    );
  }

  public hasCity(): boolean {
    return this.citySubject.getValue() ? true : false;
  }

  private fromJsonToCity(json: { [key: string]: any }): City {
    return json[0] as City;
  }
}
