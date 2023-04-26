import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraProductComponent } from './extra-product.component';

describe('ExtraProductComponent', () => {
  let component: ExtraProductComponent;
  let fixture: ComponentFixture<ExtraProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
