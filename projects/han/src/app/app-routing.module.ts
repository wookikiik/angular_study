import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const rootRoutes: Routes = [
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
