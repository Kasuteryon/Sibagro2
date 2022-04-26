import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifTypeAllComponent } from './identif-type-all.component';

describe('IdentifTypeAllComponent', () => {
  let component: IdentifTypeAllComponent;
  let fixture: ComponentFixture<IdentifTypeAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifTypeAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifTypeAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
