import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CattleAddComponent } from './cattle-add.component';

describe('CattleAddComponent', () => {
  let component: CattleAddComponent;
  let fixture: ComponentFixture<CattleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CattleAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CattleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
