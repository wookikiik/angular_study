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
  title = '도시 검색 페이지';

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.city$ = this.cityService.getCurrentCity();
  }

  searchCity(cityName: string): void {
    if (cityName.trim().length === 0) {
      alert('도시를 입력하세요');
      return;
    }

    this.isSubmitting = true;
    this.cityService.fetchCityByName(cityName);
  }
}
