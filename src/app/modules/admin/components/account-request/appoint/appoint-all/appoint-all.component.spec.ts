import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointAllComponent } from './appoint-all.component';

describe('AppointAllComponent', () => {
  let component: AppointAllComponent;
  let fixture: ComponentFixture<AppointAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
