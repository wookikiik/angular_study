import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CounterService } from '../core';


@Injectable()
export class AuthResolver implements Resolve<number> {

    constructor(
        private counterService: CounterService
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<number> {
        return this.counterService.count$.pipe(take(1));
    }
}
