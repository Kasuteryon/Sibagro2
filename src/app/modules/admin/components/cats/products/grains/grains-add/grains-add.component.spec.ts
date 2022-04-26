import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrainsAddComponent } from './grains-add.component';

describe('GrainsAddComponent', () => {
  let component: GrainsAddComponent;
  let fixture: ComponentFixture<GrainsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrainsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrainsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
