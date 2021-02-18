import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CityService } from '../../core/services/city.service';

@Component({
    selector: 'app-city-search',
    templateUrl: './city.search.component.html'
})
export class CitySearchComponent {

    searchCityForm: FormGroup;

    constructor(
        private cityService: CityService,
        private fb: FormBuilder
    ) {
        this.searchCityForm = this.fb.group({
            city: ['', [Validators.required]]
        });
    }

    clickSearchCityButton(): void {
        this.cityService.searchCity(this.searchCityForm.get('city').value);
    }
}
