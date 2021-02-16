import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SharedModule { }
