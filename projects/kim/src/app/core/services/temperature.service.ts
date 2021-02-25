import { Injectable } from '@angular/core';
import { TemperatureUnit } from '../enums/temperature.unit';

@Injectable({
    providedIn: 'root'
})
export class TemperatureService {
    temperatureUnit = TemperatureUnit.celcius;

    constructor() { }

    convertTemperatureUnit(): void {
        this.temperatureUnit = this.temperatureUnit === TemperatureUnit.celcius ?
            TemperatureUnit.fahrenheit : TemperatureUnit.celcius;
    }
}
