import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorOrderPrescriptionComponent } from './doctor-order-prescription.component';

describe('DoctorOrderPrescriptionComponent', () => {
  let component: DoctorOrderPrescriptionComponent;
  let fixture: ComponentFixture<DoctorOrderPrescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorOrderPrescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorOrderPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
