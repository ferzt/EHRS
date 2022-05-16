import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorNurseViewVisitationComponent } from './doctornurse-view-visitation.component';

describe('DoctorDiagnosisComponent', () => {
  let component: DoctorNurseViewVisitationComponent;
  let fixture: ComponentFixture<DoctorNurseViewVisitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorNurseViewVisitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorNurseViewVisitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
