import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCatalogUploadComponent } from './new-catalog-upload.component';

describe('NewCatalogUploadComponent', () => {
  let component: NewCatalogUploadComponent;
  let fixture: ComponentFixture<NewCatalogUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCatalogUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCatalogUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
