import { TestBed } from '@angular/core/testing';

import { FetchInfoService } from './fetch-info.service';

describe('FetchInfoService', () => {
  let service: FetchInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
