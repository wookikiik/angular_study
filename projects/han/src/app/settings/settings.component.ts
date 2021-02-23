import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TemperatureUnit } from '../core/enums';
import { TemperatureService } from '../core/services/temperature.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  tempUnit = TemperatureUnit;
  tempUnit$: Observable<TemperatureUnit>;

  constructor(private temeratureService: TemperatureService) { }

  ngOnInit(): void {
    this.tempUnit$ = this.temeratureService.getTempUnit();
  }

  toggleTempUnit(): void {
    this.temeratureService.toggleUnit();
  }
}
