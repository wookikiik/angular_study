import { Injectable } from '@angular/core';
import { TemperatureUnit } from '../enums/temperature.unit';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    temperatureUnit = TemperatureUnit.celcius;
    constructor() { }

    conversionTempToggle(temperatureUnit: TemperatureUnit): void {
        this.temperatureUnit = temperatureUnit;
    }
}
