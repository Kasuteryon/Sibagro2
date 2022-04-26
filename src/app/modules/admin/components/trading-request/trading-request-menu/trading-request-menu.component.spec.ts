import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingRequestMenuComponent } from './trading-request-menu.component';

describe('TradingRequestMenuComponent', () => {
  let component: TradingRequestMenuComponent;
  let fixture: ComponentFixture<TradingRequestMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingRequestMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingRequestMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
