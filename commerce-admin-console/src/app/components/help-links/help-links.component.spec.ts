import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HelpLinksComponent } from './help-links.component';
import { TranslateLoader, TranslateModule, TranslateFakeLoader, TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../../services/auth.service';


fdescribe('HelpLinksComponent', () => {
  let component: HelpLinksComponent;
  let fixture: ComponentFixture<HelpLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        TranslateModule.forChild({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        }),
        SharedModule
      ],
      declarations: [ HelpLinksComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(async(inject([ TranslateService], (_translateService: TranslateService) => {
    fixture = TestBed.createComponent(HelpLinksComponent);
    component = fixture.componentInstance;
    _translateService.set('HELPLINKS.HELP','help','en');
    fixture.detectChanges();
  })));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should translate HELPLINKS.HELP to help', () => {
    const helpEl = fixture.debugElement.nativeElement;
    const span = helpEl.querySelector('span');
    expect(span.textContent).toEqual('help');
  });
});
