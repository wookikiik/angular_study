import { NgModule } from '@angular/core';
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
  providers: [CounterService]
})
export class MainModule { }
