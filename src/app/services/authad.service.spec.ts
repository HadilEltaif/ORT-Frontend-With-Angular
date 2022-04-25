import { TestBed } from '@angular/core/testing';

import { AuthadService } from './authad.service';

describe('AuthadService', () => {
  let service: AuthadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
