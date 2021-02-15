import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';
import { SearchcityComponent } from './searchcity/searchcity.component';

@NgModule({
  declarations: [
    SearchcityComponent
  ],
  imports: [
    SharedModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
