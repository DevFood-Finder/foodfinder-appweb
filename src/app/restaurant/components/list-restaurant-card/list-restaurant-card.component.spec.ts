import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestaurantCardComponent } from './list-restaurant-card.component';

describe('ListRestaurantCardComponent', () => {
  let component: ListRestaurantCardComponent;
  let fixture: ComponentFixture<ListRestaurantCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListRestaurantCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListRestaurantCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
