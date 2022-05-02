import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewableMedicalrecordsImagingComponent } from './viewable-medicalrecords-imaging.component';

describe('ViewableMedicalrecordsImagingComponent', () => {
  let component: ViewableMedicalrecordsImagingComponent;
  let fixture: ComponentFixture<ViewableMedicalrecordsImagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewableMedicalrecordsImagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewableMedicalrecordsImagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
