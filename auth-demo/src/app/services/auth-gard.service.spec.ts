import { TestBed, inject } from '@angular/core/testing';

import { AuthGard } from './auth-gard.service';

describe('AuthGardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGard]
    });
  });

  it('should be created', inject([AuthGard], (service: AuthGard) => {
    expect(service).toBeTruthy();
  }));
});
