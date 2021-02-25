import { Pipe, PipeTransform } from '@angular/core';
import { TemperatureUnit } from '../../core/enums';
import { TemperatureService } from '../../core/services/temperature.service';

@Pipe({ name: 'temperature' })
export class TemperaturePipe implements PipeTransform {
    constructor(private temperatureService: TemperatureService) { }

    transform(temperatureValue: number): number {
        return this.temperatureService.temperatureUnit === TemperatureUnit.fahrenheit ?
            this.convertFahrenheit(temperatureValue) :
            this.roundingTemperature(temperatureValue);
    }

    private convertFahrenheit(temperatureValue: number): number {
        return this.roundingTemperature(temperatureValue * 9 / 5 + 32);
    }

    private roundingTemperature(temperatureValue: number): number {
        return Math.round(temperatureValue * 10) / 10;
    }
}
