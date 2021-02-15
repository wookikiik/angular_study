import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../../core/models';

@Component({
  selector: 'app-weatherinfo',
  templateUrl: './weatherinfo.component.html',
  styleUrls: ['./weatherinfo.component.css']
})
export class WeatherinfoComponent implements OnInit {

  @Input()
  weather: Weather;


  constructor() { }

  ngOnInit(): void {
  }

}
