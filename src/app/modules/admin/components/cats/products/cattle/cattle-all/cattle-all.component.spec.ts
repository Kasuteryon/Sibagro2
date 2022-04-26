import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CattleAllComponent } from './cattle-all.component';

describe('CattleAllComponent', () => {
  let component: CattleAllComponent;
  let fixture: ComponentFixture<CattleAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CattleAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CattleAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
