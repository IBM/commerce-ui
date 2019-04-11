import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { CatalogsRoutingModule, routes } from './catalogs-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MainUiShellComponent } from './components/main-ui-shell/main-ui-shell.component';
import { NewCatalogUploadComponent } from './components/new-catalog-upload/new-catalog-upload.component';
import { NewMasterCategoryComponent } from './components/new-master-category/new-master-category.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ExtendedSitesComponent } from './components/extended-sites/extended-sites.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { UnderconstructionComponent } from './components/underconstruction/underconstruction.component';
import { StockHolmCASComponent } from './components/stock-holm-cas/stock-holm-cas.component';
import { StockholmComponent } from './components/stockholm/stockholm.component';
import { UnassignedCatEntriesComponent } from './components/unassigned-cat-entries/unassigned-cat-entries.component'
import { CatalogUploadComponent } from './components/catalog-upload/catalog-upload.component';
import { UiShellComponent } from './components/ui-shell/ui-shell.component';
import { TranslateModule } from '@ngx-translate/core';
import {
  ButtonModule,
  TabsModule, AccordionModule, CheckboxModule, RadioModule, TableModule, DropdownModule,
  LinkModule, ModalModule, SearchModule, PlaceholderModule, DialogModule, UIShellModule, FileUploaderModule, NotificationModule, ModalService
} from 'carbon-components-angular';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { TranslatePipe } from "@ngx-translate/core";
import { StoreselectionService } from "./services/storeSelection/storeselection.service";
import { MasterCategoryService } from "./services/masterCategory/master-category.service";
import { CatalogUploadService } from "./services/catalogUpload/catalog-upload.service";

fdescribe("Router: Catalog", () => {
  let fixture: ComponentFixture<CatalogsRoutingModule>;
  let component: CatalogsRoutingModule;
  let location: Location;
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), TranslateModule, DialogModule, PlaceholderModule, ButtonModule,
        TabsModule, AccordionModule, CheckboxModule, RadioModule, TableModule, DropdownModule, ReactiveFormsModule,
        LinkModule, ModalModule, SearchModule, UIShellModule, FileUploaderModule, NotificationModule, FormsModule],
      declarations: [LandingPageComponent, MainUiShellComponent, NewCatalogUploadComponent, NewMasterCategoryComponent, SearchResultComponent,
        ExtendedSitesComponent, UiShellComponent, CatalogUploadComponent, UnassignedCatEntriesComponent, UnderconstructionComponent,
        StockholmComponent, StockHolmCASComponent],
      providers: [StoreselectionService, MasterCategoryService, CatalogUploadService, ModalService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    // fixture = TestBed.createComponent(CatalogsRoutingModule);
    router.initialNavigation();
  });
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
  //     tick(50);
  //     expect(location.path()).toBe("/");
  //   });
  // }));
  // it('navigate to "masterCategory" takes you to /masterCategory', fakeAsync(() => {
  //   router.navigate(["/masterCategory"]).then(() => {
  //     tick(50);
  //     expect(location.path()).toBe("/masterCategory");
  //   });
  // }));
  // it('navigate to "masterCategory" takes you to /masterCategory', fakeAsync(() => {
  //   router.navigate(["/searchResult"]).then(() => {
  //     tick(50);
  //     expect(location.path()).toBe("/searchResult");
  //   });
  // }));
});
