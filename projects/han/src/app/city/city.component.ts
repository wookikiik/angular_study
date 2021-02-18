import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { take, takeLast } from 'rxjs/operators';
import { City, TextInputOptions } from '../core/models';
import { CityService } from '../core/services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit, OnDestroy {

  city: City;
  subscription: Subscription;
  isSubmitting = false;
  title = '도시 검색 페이지';
  textInputOptions: TextInputOptions = {
    initialValue: '',
    placeholderText: '현재 날씨를 알고싶은 도시명을 입력하세요.',
    width: 300,
    height: 20
  };

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    console.log('onInit');
    // this.subscription = this.cityService.getCurrentCity().subscribe(city => {
    //   console.log('received city', city);
    //   this.city = city;
    //   this.isSubmitting = true;
    // });
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  searchCity(cityName: string): void {
    if (cityName.trim().length === 0) {
      alert('도시를 입력하세요');
      return;
    }

    // this.cityService.fetchCityByName(cityName).pipe(distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b))).subscribe(city=>console.log('fetch city', city));
    this.cityService.fetchCityByName(cityName).pipe(take(2),takeLast(1)).subscribe(city => {
      console.log('received city', city);
      this.city = city;
      this.isSubmitting = true;
    });
  }
}
