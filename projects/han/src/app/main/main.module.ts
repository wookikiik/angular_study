import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';

const mainRouting: Routes = [
  {
    path: 'main',
    component: MainComponent
  }
];

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(mainRouting)
  ],
  exports: [
    MainComponent,
    RouterModule
  ]
})
export class MainModule { }
