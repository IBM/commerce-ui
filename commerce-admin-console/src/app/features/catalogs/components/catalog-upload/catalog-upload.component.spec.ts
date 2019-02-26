import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogUploadComponent } from './catalog-upload.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'carbon-components-angular';
fdescribe('CatalogUploadComponent', () => {
  let component: CatalogUploadComponent;
  let fixture: ComponentFixture<CatalogUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, DialogModule, TranslateModule.forRoot()],
      declarations: [ CatalogUploadComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
