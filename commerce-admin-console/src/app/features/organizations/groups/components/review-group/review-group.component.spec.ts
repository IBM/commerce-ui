import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewGroupComponent } from './review-group.component';

describe('ReviewGroupComponent', () => {
  let component: ReviewGroupComponent;
  let fixture: ComponentFixture<ReviewGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
