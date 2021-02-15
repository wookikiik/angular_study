import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Weather } from '../core/models';

@Injectable()
export class WeatherResolver implements Resolve<Weather> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Weather | Observable<Weather> | Promise<Weather> {
        throw new Error('Method not implemented.');
    }
    // resolve(
    //     route: ActivatedRouteSnapshot
    // ) {

    // }
}
