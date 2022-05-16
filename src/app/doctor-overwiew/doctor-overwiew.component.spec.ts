import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorOverwiewComponent } from './doctor-overwiew.component';

describe('DoctorOverwiewComponent', () => {
  let component: DoctorOverwiewComponent;
  let fixture: ComponentFixture<DoctorOverwiewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorOverwiewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorOverwiewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
