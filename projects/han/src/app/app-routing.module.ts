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
                path: 'search',
                loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
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
