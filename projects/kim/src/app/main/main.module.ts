import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterService } from '../core/services/counter.service';
import { ExcuteValueFactoryProvider, ExcuteValueProvider } from '../core/services/counter.service.provider';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
];

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    CounterService,
    ExcuteValueFactoryProvider,
    ExcuteValueProvider
  ]
})
export class MainModule { }
