import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CounterService } from '../core';


@Injectable()
export class AuthResolver implements Resolve<number> {

    constructor(private counterService: CounterService) { }

    resolve(): Observable<number> {
        return this.counterService.count$.pipe(take(1));
    }
}
