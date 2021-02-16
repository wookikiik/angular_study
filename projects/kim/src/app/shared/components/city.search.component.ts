import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../../core/models';
import { CityService } from '../../core/services';

@Component({
    selector: 'app-city-search',
    templateUrl: './city.search.component.html'
})
export class CitySearchComponent implements OnInit {

    @Output() cityData = new EventEmitter<Observable<City>>();
    cityData$: Observable<City>;

    constructor(private cityService: CityService) { }

    ngOnInit(): void {
        this.cityService.setCitydata();
    }

    searchCity(): void {
        this.cityData.emit(this.cityService.getCityData());
    }
}
