import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewableMedicalrecordsDemographicsComponent } from './viewable-medicalrecords-demographics.component';

describe('ViewableMedicalrecordsDemographicsComponent', () => {
  let component: ViewableMedicalrecordsDemographicsComponent;
  let fixture: ComponentFixture<ViewableMedicalrecordsDemographicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewableMedicalrecordsDemographicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewableMedicalrecordsDemographicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
