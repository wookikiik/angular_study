import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/han/src/environments/environment';
import { Observable } from 'rxjs';
import { Weather } from '../../core/models';
import { WeatherService } from '../../core/services/weather.service';

@Component({
  selector: 'app-weatherinfo',
  templateUrl: './weatherinfo.component.html',
  styleUrls: ['./weatherinfo.component.css']
})
export class WeatherinfoComponent implements OnInit {

  weather$: Observable<Weather>;

  imageUrl = `${environment.api_url}/static/img/weather/png/64/`;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weather$ = this.weatherService.getCurrentWeather();
  }
}
