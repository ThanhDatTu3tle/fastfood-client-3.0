import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHighlightsComponent } from './menu-highlights.component';

describe('MenuHighlightsComponent', () => {
  let component: MenuHighlightsComponent;
  let fixture: ComponentFixture<MenuHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuHighlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
