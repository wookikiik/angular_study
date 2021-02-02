import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {
    CountsService
} from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CountsService
  ],
  declarations: []
})
export class CoreModule {}
