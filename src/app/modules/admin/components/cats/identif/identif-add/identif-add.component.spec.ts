import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifAddComponent } from './identif-add.component';

describe('IdentifAddComponent', () => {
  let component: IdentifAddComponent;
  let fixture: ComponentFixture<IdentifAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
