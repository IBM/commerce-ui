import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCatalogComponent } from './default-catalog.component';

describe('DefaultCatalogComponent', () => {
  let component: DefaultCatalogComponent;
  let fixture: ComponentFixture<DefaultCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
