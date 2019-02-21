import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogUploadComponent } from './catalog-upload.component';

describe('CatalogUploadComponent', () => {
  let component: CatalogUploadComponent;
  let fixture: ComponentFixture<CatalogUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
