import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TextInputOptions } from '../../../core/models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText: FormControl;

  @Input() textInputOptions: TextInputOptions;

  @Output()
  search = new EventEmitter<string>();

  ngOnInit(): void {
    this.searchText = new FormControl(this.textInputOptions.initialValue ? this.textInputOptions.initialValue : '');
  }

  submit(): void {
    this.search.emit(this.searchText.value);
  }
}
