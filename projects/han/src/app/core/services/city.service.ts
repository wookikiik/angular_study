import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { City } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private citySubject: BehaviorSubject<City> = new BehaviorSubject<City>({title: '', woeid: 0});
  private city$: Observable<City> = this.citySubject.asObservable();

  constructor(private apiService: ApiService) { }

  fetchCity(cityName: string): Observable<City> {
    this.apiService
      .get(`/api/location/search/?query=${cityName}`)
      .subscribe(data => {
        this.citySubject.next({title: data.title, woeid: data.woeid});
      });

    return this.city$;
  }

  getCurrentCity(): Observable<City> {
    return this.city$;
  }
}
