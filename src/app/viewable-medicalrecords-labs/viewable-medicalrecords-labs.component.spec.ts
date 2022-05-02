import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewableMedicalrecordsLabsComponent } from './viewable-medicalrecords-labs.component';

describe('ViewableMedicalrecordsLabsComponent', () => {
  let component: ViewableMedicalrecordsLabsComponent;
  let fixture: ComponentFixture<ViewableMedicalrecordsLabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewableMedicalrecordsLabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewableMedicalrecordsLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
