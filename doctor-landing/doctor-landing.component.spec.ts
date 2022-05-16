import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorLandingComponent } from './doctor-landing.component';

describe('DoctorLandingComponent', () => {
  let component: DoctorLandingComponent;
  let fixture: ComponentFixture<DoctorLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
