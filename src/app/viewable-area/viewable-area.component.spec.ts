import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewableAreaComponent } from './viewable-area.component';

describe('ViewableAreaComponent', () => {
  let component: ViewableAreaComponent;
  let fixture: ComponentFixture<ViewableAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewableAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewableAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
