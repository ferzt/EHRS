import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseOverwiewComponent } from './nurse-overwiew.component';

describe('NurseOverwiewComponent', () => {
  let component: NurseOverwiewComponent;
  let fixture: ComponentFixture<NurseOverwiewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseOverwiewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseOverwiewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
