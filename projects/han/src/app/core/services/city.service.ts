import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { City } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private citySubject: BehaviorSubject<City>;
  private city$: Observable<City>;

  constructor(private apiService: ApiService) {
    this.citySubject = new BehaviorSubject<City>({
      title: '',
      woeid: 0
    });
    this.city$ = this.citySubject.asObservable();
  }

  fetchCity(cityName: string): Observable<City> {
    this.apiService
      .get('/search', new HttpParams().set('?query', cityName));
    return this.city$;
  }

  getCurrentCity(): Observable<City> {
    return this.city$;
  }
}
