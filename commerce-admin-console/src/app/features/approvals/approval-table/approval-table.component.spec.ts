import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalTableComponent } from './approval-table.component';

describe('ApprovalTableComponent', () => {
  let component: ApprovalTableComponent;
  let fixture: ComponentFixture<ApprovalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
