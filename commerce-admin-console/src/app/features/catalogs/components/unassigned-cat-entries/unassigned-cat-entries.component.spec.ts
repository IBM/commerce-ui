import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UnassignedCatEntriesComponent } from './unassigned-cat-entries.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateLoader, TranslateModule, TranslateFakeLoader, TranslateService } from '@ngx-translate/core';

fdescribe('UnassignedCatEntriesComponent', () => {
  let component: UnassignedCatEntriesComponent;
  let fixture: ComponentFixture<UnassignedCatEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot()],
      declarations: [ UnassignedCatEntriesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignedCatEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "Translation header!"', () => {
    const headerElement: HTMLElement = fixture.nativeElement;
    const header  = headerElement.querySelector('h3');
    expect(header.textContent).toContain('CATALOGS.UNASSIGNED_CATALOG_ENTRIES.CATALOG_ENTRIES_LIST');
  });
});
