import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionRequestMenuComponent } from './auction-request-menu.component';

describe('AuctionRequestMenuComponent', () => {
  let component: AuctionRequestMenuComponent;
  let fixture: ComponentFixture<AuctionRequestMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionRequestMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionRequestMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
