import { Component } from '@angular/core';
import {
  CounterService
} from '../core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  providers: [CounterService]
})
export class MainComponent { }
