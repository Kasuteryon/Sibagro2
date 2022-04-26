import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionsAllComponent } from './divisions-all.component';

describe('DivisionsAllComponent', () => {
  let component: DivisionsAllComponent;
  let fixture: ComponentFixture<DivisionsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionsAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
