import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { StoreselectionService } from '../../services/storeSelection/storeselection.service';

class MockHeaderService extends StoreselectionService {

}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let testBedService: StoreselectionService;
  let componentService: StoreselectionService;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule, FormsModule, TranslateModule.forRoot()],
//       declarations: [ HeaderComponent ],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HeaderComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });






    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
          imports: [RouterTestingModule, FormsModule, TranslateModule.forRoot()],
          declarations: [ HeaderComponent ],
          schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [StoreselectionService]
        });

        // Configure the component with another set of Providers
        TestBed.overrideComponent(
            HeaderComponent,
            { set: { providers: [{ provide: StoreselectionService, useClass: MockHeaderService }] } }
        );

        // create component and test fixture
        fixture = TestBed.createComponent(HeaderComponent);

        // get test component from the fixture
        component = fixture.componentInstance;

        // StoreselectionService provided to the TestBed
        testBedService = TestBed.get(StoreselectionService);

        // StoreselectionService provided by Component, (should return MockHeaderService)
        componentService = fixture.debugElement.injector.get(StoreselectionService);
    });

    it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
        inject([StoreselectionService], (injectService: StoreselectionService) => {
            expect(injectService).toBe(testBedService);
        })
    );

    it('Service injected via component should be and instance of MockHeaderService', () => {
        expect(componentService instanceof MockHeaderService).toBeTruthy();
    });
    it('should contain "Translation header!"', () => {
   const headerElement: HTMLElement = fixture.nativeElement;
   // const header  = headerElement.querySelector('h3')
   expect(headerElement.textContent).toContain('CATALOGS.EXTENDED_SITES.header');
 });
});