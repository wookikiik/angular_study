import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CityRoutingModule } from './city-routing.module';
import { CityComponent } from './city.component';

@NgModule({
  declarations: [
    CityComponent,
  ],
  imports: [
    SharedModule,
    CityRoutingModule,
  ]
})
export class CityModule { }
