import { NgModule } from '@angular/core';
import { counterUnitFactory, COUNTER_UNIT } from '../core/provider/counter.unit.provider';
import { CounterService } from '../core/services/counter.service';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    SharedModule,
    MainRoutingModule
  ],
  // providers: [CounterService, { provide: COUNTER_UNIT, useValue: 5 }]
  providers: [CounterService, { provide: COUNTER_UNIT, useFactory: counterUnitFactory(5) }]
})
export class MainModule { }
