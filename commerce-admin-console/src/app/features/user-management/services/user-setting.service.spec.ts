import { TestBed } from '@angular/core/testing';

import { UserSettingService } from './user-setting.service';

describe('UserSettingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserSettingService = TestBed.get(UserSettingService);
    expect(service).toBeTruthy();
  });
});
