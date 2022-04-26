import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesAllComponent } from './phones-all.component';

describe('PhonesAllComponent', () => {
  let component: PhonesAllComponent;
  let fixture: ComponentFixture<PhonesAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonesAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
