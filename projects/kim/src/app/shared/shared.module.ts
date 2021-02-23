import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CitySearchComponent, UnitToggleComponent } from './components';
import { TemperaturePipe } from './pipes/temperaturePipe';

@NgModule({
  declarations: [
    CitySearchComponent,
    UnitToggleComponent,
    TemperaturePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    // MatButtonModule
  ],
  exports: [
    CitySearchComponent,
    UnitToggleComponent,

    TemperaturePipe,
    RouterModule
  ]
})
export class SharedModule { }
