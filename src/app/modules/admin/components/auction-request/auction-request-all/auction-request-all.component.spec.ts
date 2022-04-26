import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionRequestAllComponent } from './auction-request-all.component';

describe('AuctionRequestAllComponent', () => {
  let component: AuctionRequestAllComponent;
  let fixture: ComponentFixture<AuctionRequestAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionRequestAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionRequestAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
