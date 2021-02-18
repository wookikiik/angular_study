import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeatherComponent } from './weather.component';
import { WeatherGuard } from './weather.guard';
import { WeatherResolver } from './weather.resolver';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: WeatherComponent,
      resolve: { weather: WeatherResolver },
      canActivate: [WeatherGuard]
    }
  ])],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
