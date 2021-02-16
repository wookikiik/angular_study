import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { City, MOCK_CITY } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private citySubject: BehaviorSubject<City> = new BehaviorSubject<City>(null);
  private city$: Observable<City> = this.citySubject.asObservable();

  constructor(private apiService: ApiService) { }

  public fetchCity(cityName: string): Observable<City> {
    /*
    this.apiService
      .get(`/api/location/search/?query=${cityName}`)
      .subscribe(data => {
        this.citySubject.next({title: data.title, woeid: data.woeid});
      });
    */
    this.citySubject.next(
      (cityName === 'London') ? this.fromJsonToCity(MOCK_CITY) : { title: '', woeid: 0 }
    );

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

  private fromJsonToCity(json: { [key: string]: any }): City {
    return json as City;
  }
}
