import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewableMedicalrecordsVitalsComponent } from './viewable-medicalrecords-vitals.component';

describe('ViewableMedicalrecordsVitalsComponent', () => {
  let component: ViewableMedicalrecordsVitalsComponent;
  let fixture: ComponentFixture<ViewableMedicalrecordsVitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewableMedicalrecordsVitalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewableMedicalrecordsVitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
