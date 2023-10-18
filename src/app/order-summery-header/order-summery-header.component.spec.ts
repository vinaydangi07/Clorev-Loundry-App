import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummeryHeaderComponent } from './order-summery-header.component';

describe('OrderSummeryHeaderComponent', () => {
  let component: OrderSummeryHeaderComponent;
  let fixture: ComponentFixture<OrderSummeryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSummeryHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSummeryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
