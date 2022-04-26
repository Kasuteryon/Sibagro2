import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRequestDenyComponent } from './account-request-deny.component';

describe('AccountRequestDenyComponent', () => {
  let component: AccountRequestDenyComponent;
  let fixture: ComponentFixture<AccountRequestDenyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountRequestDenyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRequestDenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
