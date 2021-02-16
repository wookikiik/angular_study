import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { City } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  citySubject: BehaviorSubject<City>;
  cityData$: Observable<City>;

  constructor() {
    this.citySubject = new BehaviorSubject<City>({ title: null, woeid: undefined });
    this.cityData$ = this.citySubject.asObservable();
  }

  getCityData(): Observable<City> {
    return this.cityData$;
  }

  setCitydata(): void {
    const CITYDATA: City = {
      title: 'Seoul',
      woeid: '1132599'
    };
    this.citySubject.next(CITYDATA);
  }
}
