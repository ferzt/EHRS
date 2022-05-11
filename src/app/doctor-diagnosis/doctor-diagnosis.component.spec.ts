import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDiagnosisComponent } from './doctor-diagnosis.component';

describe('DoctorDiagnosisComponent', () => {
  let component: DoctorDiagnosisComponent;
  let fixture: ComponentFixture<DoctorDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorDiagnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
