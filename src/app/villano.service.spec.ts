import { TestBed } from '@angular/core/testing';

import { VillanService } from './villano.service';

describe('VillanoService', () => {
  let service: VillanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});