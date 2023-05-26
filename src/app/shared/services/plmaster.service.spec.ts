import { TestBed } from '@angular/core/testing';

import { PlmasterService } from './plmaster.service';

describe('PlmasterService', () => {
  let service: PlmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
