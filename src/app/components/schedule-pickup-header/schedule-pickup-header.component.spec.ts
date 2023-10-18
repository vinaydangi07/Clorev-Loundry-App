import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulePickupHeaderComponent } from './schedule-pickup-header.component';

describe('SchedulePickupHeaderComponent', () => {
  let component: SchedulePickupHeaderComponent;
  let fixture: ComponentFixture<SchedulePickupHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulePickupHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulePickupHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
