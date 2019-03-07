import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StAssociationComponent } from './st-association.component';

describe('StAssociationComponent', () => {
  let component: StAssociationComponent;
  let fixture: ComponentFixture<StAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
