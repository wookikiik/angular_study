import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { WeatherinfoComponent } from './weatherinfo/weatherinfo.component';



@NgModule({
  declarations: [
    WeatherComponent,
    WeatherinfoComponent
  ],
  imports: [
    SharedModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
