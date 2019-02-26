import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { SideBarComponent } from './side-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { StoreselectionService } from '../../services/storeSelection/storeselection.service';

// fdescribe('SideBarComponent', () => {
//   let component: SideBarComponent;
//   let fixture: ComponentFixture<SideBarComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule, TranslateModule.forRoot()],
//       declarations: [ SideBarComponent ],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SideBarComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

class MockSidebarService extends StoreselectionService {

}

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;
  let testBedService: StoreselectionService;
  let componentService: StoreselectionService;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule, FormsModule, TranslateModule.forRoot()],
//       declarations: [ SideBarComponent ],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SideBarComponent);
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
          declarations: [ SideBarComponent ],
          schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [StoreselectionService]
        });

        // Configure the component with another set of Providers
        TestBed.overrideComponent(
            SideBarComponent,
            { set: { providers: [{ provide: StoreselectionService, useClass: MockSidebarService }] } }
        );

        // create component and test fixture
        fixture = TestBed.createComponent(SideBarComponent);

        // get test component from the fixture
        component = fixture.componentInstance;

        // StoreselectionService provided to the TestBed
        testBedService = TestBed.get(StoreselectionService);

        // StoreselectionService provided by Component, (should return MockSidebarService)
        componentService = fixture.debugElement.injector.get(StoreselectionService);
    });

    it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
        inject([StoreselectionService], (injectService: MockSidebarService) => {
            expect(injectService).toBe(testBedService);
        })
    );

    it('Service injected via component should be and instance of MockStoreselectionService', () => {
        expect(componentService instanceof MockSidebarService).toBeTruthy();
    });
});