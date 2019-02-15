import { TestBed } from '@angular/core/testing';

import { StoreselectionService } from './storeselection.service';

describe('StoreselectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreselectionService = TestBed.get(StoreselectionService);
    expect(service).toBeTruthy();
  });
});
