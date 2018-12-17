import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalDashboardComponent } from './approval-dashboard.component';

describe('ApprovalDashboardComponent', () => {
  let component: ApprovalDashboardComponent;
  let fixture: ComponentFixture<ApprovalDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
