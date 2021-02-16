import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  /* 추후 shared폴더로 분리 예정 */
  cityName: FormControl;

  ngOnInit(): void {
    this.cityName = new FormControl();
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
