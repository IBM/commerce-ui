import { TestBed, inject } from '@angular/core/testing';

import { MockUsersService } from './mock-users.service';

describe('MockUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockUsersService]
    });
  });

  it('should be created', inject([MockUsersService], (service: MockUsersService) => {
    expect(service).toBeTruthy();
  }));
});
