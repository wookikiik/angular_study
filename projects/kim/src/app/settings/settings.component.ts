import { Component, OnInit } from '@angular/core';
import { TemperatureUnit } from '../core/enums/temperature.unit';
import { SettingsService } from '../core/services';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void { }

  clickCelciusToggle(): void {
    this.settingsService.conversionTempToggle(TemperatureUnit.celcius);
  }

  clickFahrenheitToggle(): void {
    this.settingsService.conversionTempToggle(TemperatureUnit.fahrenheit);
  }
}
