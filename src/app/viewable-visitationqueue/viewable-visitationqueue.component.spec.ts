import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewableVisitationqueueComponent } from './viewable-visitationqueue.component';

describe('ViewableVisitationqueueComponent', () => {
  let component: ViewableVisitationqueueComponent;
  let fixture: ComponentFixture<ViewableVisitationqueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewableVisitationqueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewableVisitationqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
