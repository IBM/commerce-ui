import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserContactComponent } from './manage-user-contact.component';

describe('ManageUserContactComponent', () => {
  let component: ManageUserContactComponent;
  let fixture: ComponentFixture<ManageUserContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUserContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
