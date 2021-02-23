import { Injectable } from '@angular/core';
import { TemperatureUnit } from '../enums/temperature.unit';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    temperatureUnit = TemperatureUnit.celcius;
    constructor() { }

    conversionTempToggle(): void {
        // Test
        this.temperatureUnit = this.temperatureUnit === TemperatureUnit.celcius ?
            TemperatureUnit.fahrenheit : TemperatureUnit.celcius;
    }
}
