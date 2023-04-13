import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTitlesComponent } from './menu-titles.component';

describe('MenuTitlesComponent', () => {
  let component: MenuTitlesComponent;
  let fixture: ComponentFixture<MenuTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTitlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
