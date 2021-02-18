import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: FormControl;

  @Input()
  placeholderText: string;

  @Input()
  width: number;
  @Input()
  height: number;

  @Output()
  search = new EventEmitter<string>();

  ngOnInit(): void {
    this.searchText = new FormControl('');
  }

  submit(): void {
    this.search.emit(this.searchText.value);
  }
}
