import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogsMenuComponent } from './catalogs-menu.component';

describe('CatalogsMenuComponent', () => {
  let component: CatalogsMenuComponent;
  let fixture: ComponentFixture<CatalogsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
