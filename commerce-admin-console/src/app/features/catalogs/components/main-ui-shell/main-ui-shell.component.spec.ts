import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUiShellComponent } from './main-ui-shell.component';

describe('MainUiShellComponent', () => {
  let component: MainUiShellComponent;
  let fixture: ComponentFixture<MainUiShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainUiShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainUiShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
