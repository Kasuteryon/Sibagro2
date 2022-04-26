import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifTypeAddComponent } from './identif-type-add.component';

describe('IdentifTypeAddComponent', () => {
  let component: IdentifTypeAddComponent;
  let fixture: ComponentFixture<IdentifTypeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifTypeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
