import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CityService } from '../core/services/city.service';

@Injectable({
    providedIn: 'root'
})
export class WeatherGuard implements CanActivate {
    constructor(
        private cityService: CityService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        // const isValid = this.cityService.hasCity();
        // console.log(isValid);
        // if (!isValid) {
        //     return this.router.createUrlTree(['/']);
        // }
        // return this.cityService.hasCity();
        return this.router.createUrlTree(['/']);
    }

}
