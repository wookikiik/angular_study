import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SettingsRountingModule } from './setting-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRountingModule
  ],
  exports: [
    SettingsComponent
  ]
})
export class SettingsModule { }
