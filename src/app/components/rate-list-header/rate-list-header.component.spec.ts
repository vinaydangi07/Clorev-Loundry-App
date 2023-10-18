import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateListHeaderComponent } from './rate-list-header.component';

describe('RateListHeaderComponent', () => {
  let component: RateListHeaderComponent;
  let fixture: ComponentFixture<RateListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateListHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
