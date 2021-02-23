import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { WeatherConditionDirective } from './directives/weather-condition.directive';
import { HeaderComponent } from './layout/header/header.component';
import { MaterialModule } from './material.module';
import { TemperaturePipe } from './pipes/temperature.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    WeatherConditionDirective,
    TemperaturePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    WeatherConditionDirective,
    TemperaturePipe,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class SharedModule { }
