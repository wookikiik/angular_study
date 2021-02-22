import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CityService } from '../core/services/city.service';

@Injectable({
    providedIn: 'root'
})
export class WeatherGuard implements CanActivate {
    constructor(
        private cityService: CityService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
        return this.cityService.getCurrentCity().pipe(
            take(1),
            map(city => {
                return (city.woeid !== undefined && city.woeid !== 0) ? true : this.router.createUrlTree(['/']);
            })
        );
    }

}
