import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedSitesComponent } from './extended-sites.component';

describe('ExtendedSitesComponent', () => {
  let component: ExtendedSitesComponent;
  let fixture: ComponentFixture<ExtendedSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
