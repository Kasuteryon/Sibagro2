import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRequestAllComponent } from './account-request-all.component';

describe('AccountRequestAllComponent', () => {
  let component: AccountRequestAllComponent;
  let fixture: ComponentFixture<AccountRequestAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountRequestAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRequestAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
