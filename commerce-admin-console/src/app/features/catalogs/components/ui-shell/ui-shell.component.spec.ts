import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import {Location} from "@angular/common";
import { NewMasterCategoryComponent } from '../new-master-category/new-master-category.component';
import { NewCatalogUploadComponent } from '../new-catalog-upload/new-catalog-upload.component';
import * as core from '@angular/core';

import { ExtendedSitesComponent } from '../extended-sites/extended-sites.component';
import { SearchResultComponent } from '../search-result/search-result.component';
import { UnderconstructionComponent } from '../underconstruction/underconstruction.component';
import { StockHolmCASComponent } from '../stock-holm-cas/stock-holm-cas.component';
import { StockholmComponent } from '../stockholm/stockholm.component';
import { UnassignedCatEntriesComponent } from '../unassigned-cat-entries/unassigned-cat-entries.component'
import { CatalogUploadComponent } from '../catalog-upload/catalog-upload.component';
import { UiShellComponent} from '../ui-shell/ui-shell.component';
import { ButtonModule,
    TabsModule, AccordionModule, CheckboxModule, RadioModule, TableModule, DropdownModule,
LinkModule, ModalModule, SearchModule, PlaceholderModule, UIShellModule, DialogModule, FileUploaderModule,
 NotificationModule, ModalService  } from 'carbon-components-angular';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { TranslatePipe } from "@ngx-translate/core";

import { MainUiShellComponent } from '../main-ui-shell/main-ui-shell.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  CatalogsRoutingModule, routes } from '../../catalogs-routing.module';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { StoreselectionService } from '../../services/storeSelection/storeselection.service';
import { MasterCategoryService } from '../../services/masterCategory/master-category.service';
import { CatalogUploadService } from '../../services/catalogUpload/catalog-upload.service';
fdescribe('MainUiShellComponent', () => {
  let component: UiShellComponent;
  let fixture: ComponentFixture<UiShellComponent>;

  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(routes), TranslateModule, DialogModule, PlaceholderModule, ButtonModule,
          TabsModule, AccordionModule, CheckboxModule, RadioModule, TableModule, DropdownModule, ReactiveFormsModule, 
      LinkModule, ModalModule, SearchModule, UIShellModule, FileUploaderModule, NotificationModule, FormsModule, CatalogsRoutingModule],
        declarations: [LandingPageComponent, MainUiShellComponent, NewCatalogUploadComponent, NewMasterCategoryComponent,
           SearchResultComponent,
          ExtendedSitesComponent, UiShellComponent, CatalogUploadComponent, UnassignedCatEntriesComponent, UnderconstructionComponent, 
          StockholmComponent, StockHolmCASComponent],
          providers: [ StoreselectionService, MasterCategoryService, CatalogUploadService, ModalService],
          schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
        router = TestBed.get(Router);
        location = TestBed.get(Location);
          // fixture = TestBed.createComponent(CatalogsRoutingModule);
          router.initialNavigation();
  }));
  // it('should create', () => {
  //   expect(component).toBeUndefined();
  // });
  // it("fakeAsync works", fakeAsync(() => {
  //   let promise = new Promise(resolve => {
  //     setTimeout(resolve, 10);
  //   });
  //   let done = false;
  //   promise.then(() => (done = true));
  //   tick(50);
  //   expect(done).toBeTruthy();
  // }));
  // it('navigate to "" redirects you to /catalog', fakeAsync(() => {
  //   router.navigate([""]).then(() => {
  //     expect(location.path()).toBe("/");
  //   });
  // }));
  // it('navigate to "newCatalogUpload" takes you to /newCatalogUpload', fakeAsync(() => {
  //   router.navigate(["/newCatalogUpload"]).then(() => {
  //     tick(50);
  //     expect(location.path()).toBe("/newCatalogUpload");
  //   });
  // }));
});
