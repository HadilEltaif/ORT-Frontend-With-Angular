import { TestBed } from '@angular/core/testing';

import { AuthreGuard } from './authre.guard';

describe('AuthreGuard', () => {
  let guard: AuthreGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthreGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
