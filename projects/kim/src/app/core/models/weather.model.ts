import { WeatherCondition } from '../enums/weather.condition';

export interface Weather {
    condition: WeatherCondition;
    formattedCondition: string;
    minTemp: number;
    maxTemp: number;
    Temp: number;
    updateDate: Date;
    location: string;
}
