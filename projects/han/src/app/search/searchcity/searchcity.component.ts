import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  cityName: FormControl;
  isSubmitting = false;

  constructor(private cityService: CityService) {
    this.cityName = new FormControl();
    this.city$ = this.cityService.getCurrentCity();
  }

  searchCity(): void {
    const cityName = this.cityName.value === null ? '' : this.cityName.value.trim();
    if (cityName === '') {
      alert('도시를 입력하세요');
      return;
    } else {
      this.isSubmitting = true;
      this.cityService.fetchCity(cityName);
    }
  }
}
