import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineGroupComponent } from './define-group.component';

describe('DefineGroupComponent', () => {
  let component: DefineGroupComponent;
  let fixture: ComponentFixture<DefineGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefineGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
