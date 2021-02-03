import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CounterService } from '@heo/core';
import { SharedModule } from '@heo/shared';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent
      }
    ])
  ],
  providers: [CounterService],
  exports: [MainComponent]
})
export class MainModule { }
