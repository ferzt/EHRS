import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorOrderRadiologyComponent } from './doctor-order-radiology.component';

describe('DoctorOrderRadiologyComponent', () => {
  let component: DoctorOrderRadiologyComponent;
  let fixture: ComponentFixture<DoctorOrderRadiologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorOrderRadiologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorOrderRadiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
