import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewableMedrecSearchResultComponent } from './viewable-medrec-search-result.component';

describe('ViewableMedrecSearchResultComponent', () => {
  let component: ViewableMedrecSearchResultComponent;
  let fixture: ComponentFixture<ViewableMedrecSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewableMedrecSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewableMedrecSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
