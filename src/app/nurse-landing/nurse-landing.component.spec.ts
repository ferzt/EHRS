import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseLandingComponent } from './nurse-landing.component';

describe('NurseLandingComponent', () => {
  let component: NurseLandingComponent;
  let fixture: ComponentFixture<NurseLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
