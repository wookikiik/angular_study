import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CityComponent } from './city.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'search',
      component: CityComponent
    }
  ])],
  exports: [RouterModule]
})
export class CityRoutingModule { }
