import { TestBed } from '@angular/core/testing';

import { MasterCategoryService } from './master-category.service';

describe('MasterCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterCategoryService = TestBed.get(MasterCategoryService);
    expect(service).toBeTruthy();
  });
});
