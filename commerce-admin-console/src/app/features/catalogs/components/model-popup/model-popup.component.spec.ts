import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModelPopupComponent } from './model-popup.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DialogModule } from 'carbon-components-angular';

fdescribe('ModelPopupComponent', () => {
  let component: ModelPopupComponent;
  let fixture: ComponentFixture<ModelPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, DialogModule, TranslateModule.forRoot()],
      declarations: [ ModelPopupComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
