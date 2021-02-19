
import { NgModule } from '@angular/core';
import { CounterAuthGuard } from '../core';
import { SharedModule } from '../shared/shared.module';
import { CounterAuthRoutingModule } from './counter-auth-routing.module';
import { CounterAuthComponent } from './counter-auth.component';
import { CounterResolver } from './counter-resolver.service';

@NgModule({
    imports: [
        SharedModule,
        CounterAuthRoutingModule,
    ],
    declarations: [
        CounterAuthComponent
    ],
    providers: [
        CounterResolver,
        CounterAuthGuard
    ]
})
export class CounterAuthModule { }
