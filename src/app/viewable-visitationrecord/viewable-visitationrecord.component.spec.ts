import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewableVisitationrecordComponent } from './viewable-visitationrecord.component';

describe('ViewableVisitationrecordComponent', () => {
  let component: ViewableVisitationrecordComponent;
  let fixture: ComponentFixture<ViewableVisitationrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewableVisitationrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewableVisitationrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
