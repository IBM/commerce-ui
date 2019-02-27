import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogLevelSkuComponent } from './catalog-level-sku.component';

describe('CatalogLevelSkuComponent', () => {
  let component: CatalogLevelSkuComponent;
  let fixture: ComponentFixture<CatalogLevelSkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogLevelSkuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogLevelSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
