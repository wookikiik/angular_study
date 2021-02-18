
import { NgModule } from '@angular/core';
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
        AuthResolver
    ]
})
export class AuthModule { }
