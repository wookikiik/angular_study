import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../../core/models';
import { CityService } from '../../core/services/city.service';

@Component({
  selector: 'app-searchcity',
  templateUrl: './searchcity.component.html',
  styleUrls: ['./searchcity.component.css']
})
export class SearchcityComponent {

  city$: Observable<City>;

  constructor(
    private cityService: CityService
  ) {
    this.city$ = this.cityService.getObservableCity();

    if (cityService.getCurrentCity().title === '') {
      cityService.fetchCity();
    }
  }
}
