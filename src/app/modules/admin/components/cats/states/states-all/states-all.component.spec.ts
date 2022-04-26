import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesAllComponent } from './states-all.component';

describe('StatesAllComponent', () => {
  let component: StatesAllComponent;
  let fixture: ComponentFixture<StatesAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatesAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
