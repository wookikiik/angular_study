import { Pipe, PipeTransform } from '@angular/core';
import { TemperatureUnit } from '../../core/enums';
import { TemperatureService } from '../../core/services/temperature.service';

@Pipe({ name: 'temperature' })
export class TemperaturePipe implements PipeTransform {
    constructor(private temperatureService: TemperatureService) { }

    transform(temperatureValue: number, selectedUnit?: TemperatureUnit): string {
        let convertToUnit: TemperatureUnit;
        if (selectedUnit !== undefined) {
            convertToUnit = selectedUnit;
        } else {
            this.temperatureService.getTempUnit()
                .subscribe(unit => {
                    convertToUnit = unit;
                }).unsubscribe();
        }
        return `${this.convertTemp(temperatureValue, convertToUnit)} ${convertToUnit}`;
    }

    convertTemp(temperatureValue: number, convertToUnit: TemperatureUnit): number {

        return convertToUnit === TemperatureUnit.celcius ?
            temperatureValue /*(temperatureValue * 9 / 5) + 32*/ : (temperatureValue - 32) * 5 / 9;
    }

}
