import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewableMedicalRecordComponent } from './viewable-medical-record.component';

describe('ViewableMedicalRecordComponent', () => {
  let component: ViewableMedicalRecordComponent;
  let fixture: ComponentFixture<ViewableMedicalRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewableMedicalRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewableMedicalRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
