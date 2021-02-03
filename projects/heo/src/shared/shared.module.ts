import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CounterService } from '@heo/core';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
  ],
  exports: [CounterComponent]
})
export class SharedModule {
  static withCounter(): ModuleWithProviders<SharedModule>{
    return {
      ngModule: SharedModule,
      providers: [
        {
          provide: CounterService,
          useFactory: () => new CounterService()
        }
      ]
    };
  }
}
