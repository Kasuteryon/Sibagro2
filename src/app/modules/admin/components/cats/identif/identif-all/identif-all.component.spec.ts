import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifAllComponent } from './identif-all.component';

describe('IdentifAllComponent', () => {
  let component: IdentifAllComponent;
  let fixture: ComponentFixture<IdentifAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
