import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRequestMenuComponent } from './account-request-menu.component';

describe('AccountRequestMenuComponent', () => {
  let component: AccountRequestMenuComponent;
  let fixture: ComponentFixture<AccountRequestMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountRequestMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRequestMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
