import { Location } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { Router  } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { StockHolmCASComponent,  } from './stock-holm-cas.component';

fdescribe('StockHolmCASComponent', () => {
  let component: StockHolmCASComponent;
  let fixture: ComponentFixture<StockHolmCASComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ StockHolmCASComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(StockHolmCASComponent);
    component = fixture.componentInstance;
    router.initialNavigation();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain "Translation header!"', () => {
    const headerElement: HTMLElement = fixture.nativeElement;
    // const header  = headerElement.querySelector('h3')
    expect(headerElement.textContent).toContain('CATALOGS.STOCKHOLMCAS.header');
  });

  it('navigate to "stockholmcas" takes you to /stockholmcas', fakeAsync(() => {
    router.navigate(["/stockholmcas"]).then(() => {
      expect(location.path()).toBe("/stockholmcas");
    });
  }));
});
