import { Component } from '@angular/core';
import {
  CountService
} from '../core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  providers: [CountService]
})
export class MainComponent { }
