import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeatherComponent } from './weather.component';
import { WeatherResolver } from './weather.resolver';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: WeatherComponent,
      resolve: {weather: WeatherResolver}
    }
  ])],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
