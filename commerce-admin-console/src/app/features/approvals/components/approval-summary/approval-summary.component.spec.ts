import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalSummaryComponent } from './approval-summary.component';

describe('ApprovalSummaryComponent', () => {
  let component: ApprovalSummaryComponent;
  let fixture: ComponentFixture<ApprovalSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should', async(() => {
    spyOn(component, 'ApprovalSummaryComponent');
  
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.ApprovalSummaryComponent).toHaveBeenCalled();
    });
});
