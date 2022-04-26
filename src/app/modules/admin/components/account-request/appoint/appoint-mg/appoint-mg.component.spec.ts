import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointMgComponent } from './appoint-mg.component';

describe('AppointMgComponent', () => {
  let component: AppointMgComponent;
  let fixture: ComponentFixture<AppointMgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointMgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointMgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
