import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockholmComponent } from './stockholm.component';

describe('StockholmComponent', () => {
  let component: StockholmComponent;
  let fixture: ComponentFixture<StockholmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockholmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockholmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
