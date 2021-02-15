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
  isCitynameInvalid = false;

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
    if (this.cityForm.valid) {
      this.isCitynameInvalid = false;
      this.cityService.fetchCity(this.cityForm.value);
    } else {
      this.isCitynameInvalid = true;
    }
  }
}
