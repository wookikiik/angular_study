import { Pipe, PipeTransform } from '@angular/core';
import { TemperatureUnit } from '../../core/enums';
import { SettingsService } from '../../core/services/settings.service';

@Pipe({ name: 'temperature' })
export class TemperaturePipe implements PipeTransform {
    constructor(private settingsService: SettingsService) { }

    transform(temperatureValue: number): string {
        if (this.settingsService.temperatureUnit === TemperatureUnit.fahrenheit) {
            return this.setFahrenheit(temperatureValue);
        } else { return this.roundingTemperature(temperatureValue); }
    }

    private setFahrenheit(temperatureValue: number): string {
        return this.roundingTemperature(temperatureValue * 9 / 5 + 32);
    }

    private roundingTemperature(temperatureValue: number): string {
        return Math.round(temperatureValue * 10) / 10 + this.settingsService.temperatureUnit;
    }
}
