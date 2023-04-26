import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraDessertDrinkComponent } from './extra-dessert-drink.component';

describe('ExtraDessertDrinkComponent', () => {
  let component: ExtraDessertDrinkComponent;
  let fixture: ComponentFixture<ExtraDessertDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraDessertDrinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraDessertDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
