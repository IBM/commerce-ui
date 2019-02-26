import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ExtendedSitesComponent } from './extended-sites.component';
import { Routes, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location} from "@angular/common";
import { TranslateLoader, TranslateModule, TranslateFakeLoader, TranslateService } from '@ngx-translate/core';
import { MasterCategoryService } from '../../services/masterCategory/master-category.service';
import { NewMasterCategoryComponent } from '../new-master-category/new-master-category.component';

fdescribe('ExtendedSitesComponent', () => {
  let component: ExtendedSitesComponent;
  let fixture: ComponentFixture<ExtendedSitesComponent>;
  let router: Router;
  let location: Location;
  let extCategoryService: MasterCategoryService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot()],
      declarations: [ ExtendedSitesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [MasterCategoryService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router); 
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(ExtendedSitesComponent);
    router.initialNavigation();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "Translation header!"', () => {
    const headerElement: HTMLElement = fixture.nativeElement;
    const header  = headerElement.querySelector('h3');
    expect(header.textContent).toContain('CATALOGS.EXTENDED_SITES.header');
  });

  // it('should be able to navigate to /catalogs/masterCategory!!!!!!!!!!!!', (done) => {
  //   // var org = null;
  //   component.onSelect();
  //   setTimeout(function() {  
  //   expect(location.path()).toBe('/');
  //   done();
  //   }, 1000);
  // });

  it("fakeAsync works", fakeAsync(() => {
    let promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/");
    });
  }));

  it('navigate to "search" takes you to /masterCategory', fakeAsync(() => {
    component.onSelect();
    router.navigate(["/catalogs/masterCategory"]).then(() => {
      expect(location.path()).toBe("/catalogs/masterCategory");
    });
  }));
});
