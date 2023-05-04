import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenSetComponent } from './chicken-set.component';

describe('ChickenSetComponent', () => {
  let component: ChickenSetComponent;
  let fixture: ComponentFixture<ChickenSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChickenSetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChickenSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
