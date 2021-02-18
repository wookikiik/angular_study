import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { WeatherCondition } from '../../core/enums';
import { WEATHER_IMAGE_DIR } from '../constants';

@Directive({
  selector: '[weatherConditionImage]'
})
export class WeatherConditionDirective implements OnInit {

  constructor(private el: ElementRef) { }

  @Input('weatherConditionImage')
  condition: WeatherCondition;

  ngOnInit(): void {
    this.el.nativeElement.style.background = `url(${this.mapConditionToImageSrc(this.condition)}) no-repeat center/cover`;
  }

  private mapConditionToImageSrc(condition: WeatherCondition): string {
    let imageSrc: string;
    switch (condition) {
      case WeatherCondition.clear:
      case WeatherCondition.lightCloud:
        imageSrc = `${WEATHER_IMAGE_DIR}/clear.png`;
        break;
      case WeatherCondition.hail:
      case WeatherCondition.snow:
      case WeatherCondition.sleet:
        imageSrc = `${WEATHER_IMAGE_DIR}/snow.png`;
        break;
      case WeatherCondition.heavyCloud:
        imageSrc = `${WEATHER_IMAGE_DIR}/cloudy.png`;
        break;
      case WeatherCondition.heavyRain:
      case WeatherCondition.lightRain:
      case WeatherCondition.showers:
        imageSrc = `${WEATHER_IMAGE_DIR}/rainy.png`;
        break;
      case WeatherCondition.thunderstorm:
        imageSrc = `${WEATHER_IMAGE_DIR}/thunderstorm.png`;
        break;
      case WeatherCondition.unknown:
        imageSrc = `${WEATHER_IMAGE_DIR}/clear.png`;
        break;
    }
    return imageSrc;
  }

}
