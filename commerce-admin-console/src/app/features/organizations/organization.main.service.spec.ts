import { TestBed } from '@angular/core/testing';

import { OrganizationMainService } from './organization.main.service';

describe('Organization.MainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganizationMainService = TestBed.get(OrganizationMainService);
    expect(service).toBeTruthy();
  });
});
