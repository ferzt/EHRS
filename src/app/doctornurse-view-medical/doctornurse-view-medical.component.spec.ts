import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorNurseViewMedicalComponent } from './doctornurse-view-medical.component';

describe('DoctorDiagnosisComponent', () => {
  let component: DoctorNurseViewMedicalComponent;
  let fixture: ComponentFixture<DoctorNurseViewMedicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorNurseViewMedicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorNurseViewMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
