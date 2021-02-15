import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcityComponent } from './searchcity.component';

describe('SearchcityComponent', () => {
  let component: SearchcityComponent;
  let fixture: ComponentFixture<SearchcityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchcityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
