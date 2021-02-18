import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'projects/han/src/environments/environment';
import { WeatherCondition } from '../../core/enums';
import { Weather } from '../../core/models';

@Component({
  selector: 'app-weatherinfo',
  templateUrl: './weatherinfo.component.html',
  styleUrls: ['./weatherinfo.component.css']
})
export class WeatherinfoComponent {

  @Input()
  weather: Weather;
  imageUrl = `${environment.image_api_url}/static/img/weather/png/64/`;

  constructor(private route: ActivatedRoute) { }

  mapConditionToImage(condition: WeatherCondition): string {
    return '';
  }
}
