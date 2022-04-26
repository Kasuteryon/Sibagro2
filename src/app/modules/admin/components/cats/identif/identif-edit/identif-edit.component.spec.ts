import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifEditComponent } from './identif-edit.component';

describe('IdentifEditComponent', () => {
  let component: IdentifEditComponent;
  let fixture: ComponentFixture<IdentifEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
