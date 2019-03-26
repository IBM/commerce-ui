import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserAccountComponent } from './manage-user-account.component';

describe('ManageUserAccountComponent', () => {
  let component: ManageUserAccountComponent;
  let fixture: ComponentFixture<ManageUserAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUserAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
