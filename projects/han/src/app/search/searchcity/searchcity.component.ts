import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  cityForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cityService: CityService
  ) {
    this.cityForm = this.fb.group({
      cityname: ['', Validators.required]
    });
    this.city$ = this.cityService.getCurrentCity();
  }

  searchCity(): void {
    this.cityService.fetchCity(this.cityForm.value);
  }
}
