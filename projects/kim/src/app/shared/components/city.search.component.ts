import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CityService } from '../../core/services/city.service';

@Component({
    selector: 'app-city-search',
    templateUrl: './city.search.component.html'
})
export class CitySearchComponent implements OnInit {
    searchCityForm: FormGroup;

    constructor(
        private cityService: CityService,
        private fb: FormBuilder
    ) {
        this.searchCityForm = this.fb.group({
            city: ['Seoul', [Validators.required]]
        });
    }

    ngOnInit(): void {
    }

    searchCity(): void {
        this.cityService.setCityData();
    }
}
