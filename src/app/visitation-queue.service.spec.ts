import { TestBed } from '@angular/core/testing';

import { VisitationQueueService } from './visitation-queue.service';

describe('VisitationQueueService', () => {
  let service: VisitationQueueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitationQueueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
