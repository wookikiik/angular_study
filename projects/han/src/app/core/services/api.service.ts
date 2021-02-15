import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(path: string): Observable<any> {
    const sampleCity: City = {title: 'London', woeid: 44418};
    return new Observable(subscriber => {
      subscriber.next(sampleCity);
    });
  }
}
