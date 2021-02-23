import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/kim/src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getLocationId(cityName: string): Observable<any> {
    return this.http.get(`${environment.api_url}/api/location/search?query=${cityName}`);
  }

  getWeahterData(locationId: number): Observable<any> {
    return this.http.get(`${environment.api_url}/api/location/${locationId}`);
  }
}
