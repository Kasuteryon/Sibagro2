import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CattleEditComponent } from './cattle-edit.component';

describe('CattleEditComponent', () => {
  let component: CattleEditComponent;
  let fixture: ComponentFixture<CattleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CattleEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CattleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
