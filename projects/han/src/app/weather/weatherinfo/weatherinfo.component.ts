import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weather } from '../../core/models';

@Component({
  selector: 'app-weatherinfo',
  templateUrl: './weatherinfo.component.html',
  styleUrls: ['./weatherinfo.component.css']
})
export class WeatherinfoComponent {

  @Input()
  weather: Weather;

  constructor(private route: ActivatedRoute) { }
}
