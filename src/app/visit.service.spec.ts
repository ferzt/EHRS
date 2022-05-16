import { TestBed } from '@angular/core/testing';

import { VisitService } from './visit.service';

describe('VisitService', () => {
  let service: VisitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
