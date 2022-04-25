import { TestBed } from '@angular/core/testing';

import { AuthadGuard } from './authad.guard';

describe('AuthadGuard', () => {
  let guard: AuthadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
