import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
    { path: '', redirectTo: '/weather', pathMatch: 'full' },
    { path: 'weather', loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule) },
    { path: 'settings', loadChildren: () => import('./settings/setting-routing.module').then(m => m.SettingsRountingModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
