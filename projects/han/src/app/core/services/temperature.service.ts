import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { TemperatureUnit } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  temperatureUnitSubject: BehaviorSubject<TemperatureUnit> = new BehaviorSubject<TemperatureUnit>(TemperatureUnit.celcius);
  temperature$: Observable<TemperatureUnit> = this.temperatureUnitSubject.asObservable().pipe(distinctUntilChanged());

  toggleUnit(): void {
    const changedUnit = (this.temperatureUnitSubject.getValue() === TemperatureUnit.celcius) ?
      TemperatureUnit.fahrenheit : TemperatureUnit.celcius;
    this.temperatureUnitSubject.next(changedUnit);
  }

  getTempUnit(): Observable<TemperatureUnit> {
    return this.temperature$;
  }


}
