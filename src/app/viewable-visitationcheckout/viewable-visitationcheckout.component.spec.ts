import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewableVisitationcheckoutComponent } from './viewable-visitationcheckout.component';

describe('ViewableVisitationcheckoutComponent', () => {
  let component: ViewableVisitationcheckoutComponent;
  let fixture: ComponentFixture<ViewableVisitationcheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewableVisitationcheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewableVisitationcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
