import { TestBed } from '@angular/core/testing';

import { UserMainService } from './user-main.service';

describe('UserMainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserMainService = TestBed.get(UserMainService);
    expect(service).toBeTruthy();
  });
});
