import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/han/src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public get(path: string): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`);
  }
}
