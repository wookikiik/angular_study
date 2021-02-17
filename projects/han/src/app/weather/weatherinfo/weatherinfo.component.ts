import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'projects/han/src/environments/environment';
import { Weather } from '../../core/models';

@Component({
  selector: 'app-weatherinfo',
  templateUrl: './weatherinfo.component.html',
  styleUrls: ['./weatherinfo.component.css']
})
export class WeatherinfoComponent implements OnInit {

  weather: Weather = {} as Weather;
  imageUrl = `${environment.api_url}/static/img/weather/png/64/`;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.weather = data.weather;
    });
  }
}
