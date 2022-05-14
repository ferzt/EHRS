import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewableMedicalrecordsMedicationsComponent } from './viewable-medicalrecords-medications.component';

describe('ViewableMedicalrecordsMedicationsComponent', () => {
  let component: ViewableMedicalrecordsMedicationsComponent;
  let fixture: ComponentFixture<ViewableMedicalrecordsMedicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewableMedicalrecordsMedicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewableMedicalrecordsMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
