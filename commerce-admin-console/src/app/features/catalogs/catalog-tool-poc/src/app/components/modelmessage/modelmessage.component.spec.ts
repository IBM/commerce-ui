import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelmessageComponent } from './modelmessage.component';

describe('ModelmessageComponent', () => {
  let component: ModelmessageComponent;
  let fixture: ComponentFixture<ModelmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
