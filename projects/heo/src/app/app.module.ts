import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '@heo/shared';
import { AppComponent } from './app.component';

const route: Route[] = [
  {
    path: '',
    loadChildren: () => import('../main/index').then(m => m.MainModule)
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
