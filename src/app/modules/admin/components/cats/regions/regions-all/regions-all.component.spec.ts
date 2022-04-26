import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsAllComponent } from './regions-all.component';

describe('RegionsAllComponent', () => {
  let component: RegionsAllComponent;
  let fixture: ComponentFixture<RegionsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionsAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
