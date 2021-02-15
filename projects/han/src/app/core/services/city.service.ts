import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { City } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private citySubject: BehaviorSubject<City>;
  private city$: Observable<City>;

  constructor() {
    this.citySubject = new BehaviorSubject<City>({
      title: '',
      woeid: 0
    });
    this.city$ = this.citySubject.asObservable();
  }

  fetchCity(cityName: string): Observable<City> {
    /*
      cityName을 api 통해서 City 가져오는 로직
    */

    const sampleCity: City = {
      title: 'London',
      woeid: 44418
    };

    this.citySubject.next(sampleCity);
    return this.city$;
  }

  getCurrentCity(): Observable<City> {
    return this.city$;
  }
}
