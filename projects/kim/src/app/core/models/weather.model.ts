import { WeatherCondition } from '../enums/weather.condition';

export interface Weather {
    condition: WeatherCondition;
    minTemp: number;
    maxTemp: number;
    Temp: number;
    updateDate: Date;
    location: string;
    locationId: number;
}
