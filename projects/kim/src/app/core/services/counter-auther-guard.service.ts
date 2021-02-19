import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CounterService } from './counter.service';

@Injectable()
export class CounterAuthGuard implements CanActivate {

    constructor(private counterService: CounterService) { }

    canActivate(): Observable<boolean> {
        return this.counterService.getAuth();
    }
}
