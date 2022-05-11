import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorOrderLabtestComponent } from './doctor-order-labtest.component';

describe('DoctorOrderLabtestComponent', () => {
  let component: DoctorOrderLabtestComponent;
  let fixture: ComponentFixture<DoctorOrderLabtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorOrderLabtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorOrderLabtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
