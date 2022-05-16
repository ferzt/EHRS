import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewableMedicalRecordLookupComponent } from './viewable-medical-record-lookup.component';

describe('ViewableMedicalRecordLookupComponent', () => {
  let component: ViewableMedicalRecordLookupComponent;
  let fixture: ComponentFixture<ViewableMedicalRecordLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewableMedicalRecordLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewableMedicalRecordLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
