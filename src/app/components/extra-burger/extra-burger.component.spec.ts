import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraBurgerComponent } from './extra-burger.component';

describe('ExtraBurgerComponent', () => {
  let component: ExtraBurgerComponent;
  let fixture: ComponentFixture<ExtraBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraBurgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
