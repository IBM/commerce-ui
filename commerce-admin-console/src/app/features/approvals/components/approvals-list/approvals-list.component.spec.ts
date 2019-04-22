import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalsListComponent } from './approvals-list.component';

describe('ApprovalsListComponent', () => {
  let component: ApprovalsListComponent;
  let fixture: ComponentFixture<ApprovalsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
