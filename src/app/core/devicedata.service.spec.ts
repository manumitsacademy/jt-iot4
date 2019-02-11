import { TestBed } from '@angular/core/testing';

import { DevicedataService } from './devicedata.service';

describe('DevicedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevicedataService = TestBed.get(DevicedataService);
    expect(service).toBeTruthy();
  });
});
