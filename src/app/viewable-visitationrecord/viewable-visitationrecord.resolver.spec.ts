import { TestBed } from '@angular/core/testing';

import { ViewableVisitationrecordResolver } from './viewable-visitationrecord.resolver';

describe('ViewableVisitationrecordResolver', () => {
  let resolver: ViewableVisitationrecordResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ViewableVisitationrecordResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
