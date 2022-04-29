import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewablePatientcheckoutComponent } from './viewable-patientcheckout.component';

describe('ViewablePatientcheckoutComponent', () => {
  let component: ViewablePatientcheckoutComponent;
  let fixture: ComponentFixture<ViewablePatientcheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewablePatientcheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewablePatientcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
