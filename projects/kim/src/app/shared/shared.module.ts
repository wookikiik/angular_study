import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { CitySearchComponent } from './components';
import { TemperaturePipe } from './pipes/temperaturePipe';

@NgModule({
  declarations: [
    CitySearchComponent,
    TemperaturePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  exports: [
    CitySearchComponent,
    MatButtonModule,
    MatSlideToggleModule,
    TemperaturePipe,
    RouterModule
  ]
})
export class SharedModule { }
