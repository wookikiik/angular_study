
import { NgModule } from '@angular/core';
import { AuthGuard } from '../core';
import { SharedModule } from '../shared/shared.module';
import { AuthResolver } from './auth-resolver.service';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
    imports: [
        SharedModule,
        AuthRoutingModule,
    ],
    declarations: [
        AuthComponent
    ],
    providers: [
        AuthResolver,
        AuthGuard
    ]
})
export class AuthModule { }
