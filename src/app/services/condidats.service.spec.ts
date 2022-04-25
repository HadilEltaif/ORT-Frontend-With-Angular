import { TestBed } from '@angular/core/testing';

import { CondidatsService } from './condidats.service';

describe('CondidatsService', () => {
  let service: CondidatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CondidatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
