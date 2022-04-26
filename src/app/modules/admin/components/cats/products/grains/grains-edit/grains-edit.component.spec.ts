import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrainsEditComponent } from './grains-edit.component';

describe('GrainsEditComponent', () => {
  let component: GrainsEditComponent;
  let fixture: ComponentFixture<GrainsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrainsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrainsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
