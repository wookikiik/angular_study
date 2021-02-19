import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterAuthGuard } from '../core/services/counter-auther-guard.service';
import { CounterAuthComponent } from './counter-auth.component';
import { CounterResolver } from './counter-resolver.service';

const routes: Routes = [
    {
        path: '',
        component: CounterAuthComponent,
        canActivate: [CounterAuthGuard],
        resolve: { countValue: CounterResolver }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CounterAuthRoutingModule { }
