import { Component } from '@angular/core';
import { of } from 'rxjs';
import { catchError, skip, take } from 'rxjs/operators';
import { City, TextInputOptions } from '../core/models';
import { CityService } from '../core/services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {

  city: City;
  isSubmitting = false;
  title = '도시 검색 페이지';
  textInputOptions: TextInputOptions = {
    initialValue: '',
    placeholderText: '현재 날씨를 알고싶은 도시명을 입력하세요.',
    width: 300,
    height: 20
  };

  constructor(private cityService: CityService) { }

  searchCity(cityName: string): void {
    if (cityName.trim().length === 0) {
      alert('도시를 입력하세요');
      return;
    }

    this.cityService.fetchCityByName(cityName).pipe(
      skip(1), take(1),
      catchError((err) => {
        this.isSubmitting = false;
        return of({ title: '', woeid: 0 } as City).pipe(take(1));
      })
    ).subscribe(city => {
      this.city = city;
      this.isSubmitting = true;
    });
  }
}
