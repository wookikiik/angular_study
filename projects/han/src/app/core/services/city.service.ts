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

  fetchCity(/* cityName 파라미터 추가 예정 */): void {
    const sampleCity: City = {
      title: 'London',
      woeid: 44418
    };

    this.citySubject.next(sampleCity);
  }

  getCurrentCity(): City {
    return this.citySubject.getValue();
  }

  getObservableCity(): Observable<City> {
    return this.city$;
  }
}
