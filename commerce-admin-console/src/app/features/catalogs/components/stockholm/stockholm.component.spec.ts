
import { Location } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { Router  } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { StockholmComponent } from './stockholm.component';


fdescribe('StockHolmCASComponent', () => {
  let component: StockholmComponent;
  let fixture: ComponentFixture<StockholmComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ StockholmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(StockholmComponent);
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
    expect(headerElement.textContent).toContain('CATALOGS.STOCKHOLM.header');
  });

  it('navigate to "stockholmcas" takes you to /stockholm', fakeAsync(() => {
    router.navigate(["/stockholm"]).then(() => {
      expect(location.path()).toBe("/stockholm");
    });
  }));
});

