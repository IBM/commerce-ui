import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBundleComponent } from './new-bundle.component';

describe('NewBundleComponent', () => {
  let component: NewBundleComponent;
  let fixture: ComponentFixture<NewBundleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBundleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
