import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewableMedicalrecordsDiagnosisComponent } from './viewable-medicalrecords-diagnosis.component';

describe('ViewableMedicalrecordsDiagnosisComponent', () => {
  let component: ViewableMedicalrecordsDiagnosisComponent;
  let fixture: ComponentFixture<ViewableMedicalrecordsDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewableMedicalrecordsDiagnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewableMedicalrecordsDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
