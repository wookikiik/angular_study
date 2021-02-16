import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CitySearchComponent, UnitToggleComponent } from './components';


@NgModule({
  declarations: [
    CitySearchComponent,
    UnitToggleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CitySearchComponent,
    UnitToggleComponent,
    RouterModule
  ]
})
export class SharedModule { }
