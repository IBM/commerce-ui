import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { TranslateModule } from '@ngx-translate/core';
import {
  ButtonModule,
  TabsModule, AccordionModule, CheckboxModule, RadioModule, TableModule, DropdownModule,
  LinkModule, ModalModule, SearchModule, PlaceholderModule, DialogModule, UIShellModule, FileUploaderModule, NotificationModule, ModalService
} from 'carbon-components-angular';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { TranslatePipe } from "@ngx-translate/core";

fdescribe("Router: Catalog", () => {
  let fixture: ComponentFixture<OrgadminRoutingModule>;
  let component: OrgadminRoutingModule;
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
  it("fakeAsync works", fakeAsync(() => {
    let promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to "" redirects you to /catalog', fakeAsync(() => {
    router.navigate([""]).then(() => {
      tick(50);
      expect(location.path()).toBe("/");
    });
  }));
  it('navigate to "masterCategory" takes you to /masterCategory', fakeAsync(() => {
    router.navigate(["/masterCategory"]).then(() => {
      tick(50);
      expect(location.path()).toBe("/masterCategory");
    });
  }));
  it('navigate to "masterCategory" takes you to /masterCategory', fakeAsync(() => {
    router.navigate(["/searchResult"]).then(() => {
      tick(50);
      expect(location.path()).toBe("/searchResult");
    });
  }));
});
