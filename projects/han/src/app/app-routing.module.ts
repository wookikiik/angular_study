import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const rootRoutes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'main',
        loadChildren: () => import('./main/main.module').then(m => m.MainModule),
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
