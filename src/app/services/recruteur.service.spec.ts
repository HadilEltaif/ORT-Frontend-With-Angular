import { TestBed } from '@angular/core/testing';

import { RecruteurService } from './recruteur.service';

describe('RecruteurService', () => {
  let service: RecruteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
