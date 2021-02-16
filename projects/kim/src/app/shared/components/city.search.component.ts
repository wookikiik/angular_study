import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { City, Weather } from '../../core/models';
import { CityService } from '../../core/services';

@Component({
    selector: 'app-city-search',
    templateUrl: './city.search.component.html'
})
export class CitySearchComponent implements OnInit {
    searchCityForm: FormGroup;
    @Output() cityData = new EventEmitter<Observable<City>>();
    @Output() weatherData = new EventEmitter<Observable<Weather>>();

    cityData$: Observable<City>;
    weatherData$: Observable<Weather>;

    constructor(
        private cityService: CityService,
        private fb: FormBuilder
    ) {
        this.searchCityForm = this.fb.group({
            city: ['Seoul', [Validators.required]]
        });
    }

    ngOnInit(): void {
        this.cityService.setCityData();
        this.cityService.setWeatherData();
    }

    searchCity(): void {
        this.cityData.emit(this.cityService.getCityData());
        this.weatherData.emit(this.cityService.getWeatherData());
    }

    searchSampleCity(): void {
        this.weatherData.emit(this.cityService.getWeatherData());
        this.cityData.emit(this.cityService.getCityData());
    }
}
