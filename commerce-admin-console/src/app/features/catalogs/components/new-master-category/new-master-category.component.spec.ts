import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { NewMasterCategoryComponent } from './new-master-category.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'carbon-components-angular';

fdescribe('NewMasterCategoryComponent', () => {
  let component: NewMasterCategoryComponent;
  let fixture: ComponentFixture<NewMasterCategoryComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, DialogModule, TranslateModule.forRoot()],
      declarations: [ NewMasterCategoryComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
    fixture = TestBed.createComponent(NewMasterCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should check save clicked', () => {
  //   component.saveMasterData();
  //   expect(component).toBeTruthy();
  // });
  // it('navigate to "extendedSite" takes you to /catalogs/extendedSite', fakeAsync(() => {
  //   router.navigate(['/catalogs/extendedSite']).then(() => {
  //     expect(location.path()).toBe('/catalogs/extendedSite');
  //   });
  // }));
  // it('navigate to "catalogs" takes you to /catalogs', fakeAsync(() => {
  //   router.navigate(['/catalogs']).then(() => {
  //     expect(location.path()).toBe('/catalogs');
  //   });
  // }));
  // it('should contain "Translation header!"', () => {
  //   const headerElement: HTMLElement = fixture.nativeElement;
  //   expect(headerElement.textContent).toContain('CATALOGS.NEW_MASTER_CATEGORY.header_text');
  // });
  // it('should contain "AssociatedStore!"', () => {
  //   const headerElement: HTMLElement = fixture.nativeElement;
  //   expect(headerElement.textContent).toContain('CATALOGS.NEW_MASTER_CATEGORY.associated_store');
  // });
  // it('should contain "AuroraESite!"', () => {
  //   const headerElement: HTMLElement = fixture.nativeElement;
  //   expect(headerElement.textContent).toContain('CATALOGS.NEW_MASTER_CATEGORY.auroraESite');
  // });
});
