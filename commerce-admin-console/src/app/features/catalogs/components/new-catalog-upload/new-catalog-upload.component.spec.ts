import { async, ComponentFixture, TestBed, fakeAsync, tick,  } from '@angular/core/testing';
import { NewCatalogUploadComponent } from './new-catalog-upload.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'carbon-components-angular';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from "@angular/common";
// import { BrowserModule, By } from '@angular/platform-browser';
fdescribe('NewCatalogUploadComponent', () => {
  let component: NewCatalogUploadComponent;
  let fixture: ComponentFixture<NewCatalogUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, DialogModule, TranslateModule.forRoot()],
      declarations: [ NewCatalogUploadComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCatalogUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // const routerSpy = createRouterSpy();
  });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  // it('should have <h3> with "New Catalog Upload"', () => {
  //   const Element: HTMLElement = fixture.nativeElement;
  //   const selector = Element.querySelector('h3');
  //   expect(selector.textContent).toEqual('CATALOGS.NEW_CATALOG_UPLOAD.HEADER');
  //   // expect('CATALOGS.SEARCH_RESULT.HEADER').toEqual('Search Results - Catagories')
  // });
  // it('before selection targetcatalog and charecterset should be null', () => {
  //   expect(component.targetCatalog).toContain('');
  //   expect(component.charecterSet).toContain('');
  // });
  // it('before selection filename should be undefined', () => {
  // expect(component.filename[0]).toBeUndefined;
  // });
  // it('before selection size should be undefined', () => {
  //   expect(component.size).toBeUndefined; 
  // });
  // it('validating save should be disabled', () => {
  // });
  // it('cancel btn', fakeAsync(() => {
  //   let router = TestBed.get(Router);
  //   let location = TestBed.get(Location);
  //   router.navigate(["newCatalogUpload"]).then(() => {
  //     tick(50);
  //     expect(location.page()).toBe("/newCatalogUpload");
  //   });
  // }));
});