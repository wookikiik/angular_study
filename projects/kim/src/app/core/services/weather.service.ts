import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { City } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  citySubject: BehaviorSubject<City>;
  cityData$: Observable<City>;

  constructor() {
    this.citySubject = new BehaviorSubject<City>({ title: '', woeid: '' });
    this.cityData$ = this.citySubject.asObservable();
  }

  initCitydata(): Observable<City> {
    return this.cityData$;
  }
}
