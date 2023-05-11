import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTitlesComponent } from './nav-titles.component';

describe('NavTitlesComponent', () => {
  let component: NavTitlesComponent;
  let fixture: ComponentFixture<NavTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTitlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
