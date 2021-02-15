import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(path: string, params: HttpParams): Observable<any> {
    console.log('path=', path);
    console.log('params=', params);
    const sampleCity: City = {
      title: 'London',
      woeid: 44418
    };
    return new Observable(subscriber => subscriber.next(sampleCity));
  }
}
