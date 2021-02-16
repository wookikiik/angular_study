import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../core/models';
import { CityService } from '../core/services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  city$: Observable<City>;
  isSubmitting = false;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.city$ = this.cityService.getCurrentCity();
  }

  searchCity(): void {
    // const cityName = this.cityName.value === null ? '' : this.cityName.value.trim();
    // if (cityName === '') {
    //   alert('도시를 입력하세요');
    //   return;
    // } else {
    //   this.isSubmitting = true;
    //   this.cityService.fetchCity(cityName);
    // }
  }
}
