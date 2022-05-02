import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewableMedicalrecordsTreatmentComponent } from './viewable-medicalrecords-treatment.component';

describe('ViewableMedicalrecordsTreatmentComponent', () => {
  let component: ViewableMedicalrecordsTreatmentComponent;
  let fixture: ComponentFixture<ViewableMedicalrecordsTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewableMedicalrecordsTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewableMedicalrecordsTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
