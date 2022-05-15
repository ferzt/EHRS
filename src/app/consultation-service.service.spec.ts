import { TestBed } from '@angular/core/testing';

import { ConsultationServiceService } from './consultation-service.service';

describe('ConsultationServiceService', () => {
  let service: ConsultationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
