import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifTypeEditComponent } from './identif-type-edit.component';

describe('IdentifTypeEditComponent', () => {
  let component: IdentifTypeEditComponent;
  let fixture: ComponentFixture<IdentifTypeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifTypeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
