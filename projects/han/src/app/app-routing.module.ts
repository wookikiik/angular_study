import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                loadChildren: () => import('./main/main.module').then(m => m.MainModule)
            },
            {
                path: 'city',
                loadChildren: () => import('./city/city.module').then(m => m.CityModule)
            },
            {
                path: 'weather',
                loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule)
            },
            {
                path: 'settings',
                loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
