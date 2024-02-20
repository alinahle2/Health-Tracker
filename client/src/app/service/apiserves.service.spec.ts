import { TestBed } from '@angular/core/testing';

import { ApiservesService } from './apiserves.service';

describe('ApiservesService', () => {
  let service: ApiservesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiservesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
