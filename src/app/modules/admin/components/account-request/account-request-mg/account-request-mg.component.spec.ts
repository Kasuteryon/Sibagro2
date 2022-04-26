import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRequestMgComponent } from './account-request-mg.component';

describe('AccountRequestMgComponent', () => {
  let component: AccountRequestMgComponent;
  let fixture: ComponentFixture<AccountRequestMgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountRequestMgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRequestMgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
