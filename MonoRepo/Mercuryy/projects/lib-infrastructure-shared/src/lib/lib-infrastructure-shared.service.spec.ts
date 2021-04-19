import { TestBed } from '@angular/core/testing';

import { LibInfrastructureSharedService } from './lib-infrastructure-shared.service';

describe('LibInfrastructureSharedService', () => {
  let service: LibInfrastructureSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibInfrastructureSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
