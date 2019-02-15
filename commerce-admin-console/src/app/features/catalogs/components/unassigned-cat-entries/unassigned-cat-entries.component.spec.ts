import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedCatEntriesComponent } from './unassigned-cat-entries.component';

describe('UnassignedCatEntriesComponent', () => {
  let component: UnassignedCatEntriesComponent;
  let fixture: ComponentFixture<UnassignedCatEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnassignedCatEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignedCatEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
