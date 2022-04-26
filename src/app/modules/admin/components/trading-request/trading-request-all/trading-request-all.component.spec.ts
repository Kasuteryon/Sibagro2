import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingRequestAllComponent } from './trading-request-all.component';

describe('TradingRequestAllComponent', () => {
  let component: TradingRequestAllComponent;
  let fixture: ComponentFixture<TradingRequestAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingRequestAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingRequestAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
