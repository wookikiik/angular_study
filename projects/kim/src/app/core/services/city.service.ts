import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { City } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  citySubject: BehaviorSubject<City> = new BehaviorSubject<City>(null);
  cityData$: Observable<City> = this.citySubject.asObservable();

  constructor(
    private apiService: ApiService,
  ) { }

  getCityData(): Observable<City> {
    return this.cityData$;
  }

  setCityData(): void {
    const CITYDATA: City = {
      title: 'Seoul',
      woeid: 1132599
    };
    this.citySubject.next(CITYDATA);
  }

}
