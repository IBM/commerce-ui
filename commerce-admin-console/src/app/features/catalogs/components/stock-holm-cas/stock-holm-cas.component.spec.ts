import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockHolmCASComponent } from './stock-holm-cas.component';

describe('StockHolmCASComponent', () => {
  let component: StockHolmCASComponent;
  let fixture: ComponentFixture<StockHolmCASComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockHolmCASComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockHolmCASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
