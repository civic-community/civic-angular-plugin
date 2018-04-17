import { TestBed, inject } from '@angular/core/testing';

import { CivicSignupService } from './civic-signup.service';

describe('CivicSignupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CivicSignupService]
    });
  });

  it('should be created', inject([CivicSignupService], (service: CivicSignupService) => {
    expect(service).toBeTruthy();
  }));
});
