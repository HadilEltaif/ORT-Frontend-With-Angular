import { TestBed } from '@angular/core/testing';

import { AuthreService } from './authre.service';

describe('AuthreService', () => {
  let service: AuthreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
