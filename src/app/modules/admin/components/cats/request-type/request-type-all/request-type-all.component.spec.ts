import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTypeAllComponent } from './request-type-all.component';

describe('RequestTypeAllComponent', () => {
  let component: RequestTypeAllComponent;
  let fixture: ComponentFixture<RequestTypeAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTypeAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTypeAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
