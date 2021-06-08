import { TestBed } from '@angular/core/testing';

import { RobotresolverService } from './robotresolver.service';

describe('RobotresolverService', () => {
  let service: RobotresolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RobotresolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
