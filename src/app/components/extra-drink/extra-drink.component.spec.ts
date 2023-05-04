import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraDrinkComponent } from './extra-drink.component';

describe('ExtraDrinkComponent', () => {
  let component: ExtraDrinkComponent;
  let fixture: ComponentFixture<ExtraDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraDrinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
