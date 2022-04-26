import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsAddComponent } from './regions-add.component';

describe('RegionsAddComponent', () => {
  let component: RegionsAddComponent;
  let fixture: ComponentFixture<RegionsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
