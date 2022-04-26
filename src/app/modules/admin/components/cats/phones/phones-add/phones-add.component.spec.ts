import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesAddComponent } from './phones-add.component';

describe('PhonesAddComponent', () => {
  let component: PhonesAddComponent;
  let fixture: ComponentFixture<PhonesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
