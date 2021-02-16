import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CitySearchComponent, UnitToggleComponent } from './components';

@NgModule({
  declarations: [
    CitySearchComponent,
    UnitToggleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    CitySearchComponent,
    UnitToggleComponent,
    RouterModule
  ]
})
export class SharedModule { }
