import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchcityComponent } from './searchcity/searchcity.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'city',
      component: SearchcityComponent
    }
  ])],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
