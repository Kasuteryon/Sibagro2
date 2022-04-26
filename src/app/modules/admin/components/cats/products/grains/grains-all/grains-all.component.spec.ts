import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrainsAllComponent } from './grains-all.component';

describe('GrainsAllComponent', () => {
  let component: GrainsAllComponent;
  let fixture: ComponentFixture<GrainsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrainsAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrainsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
