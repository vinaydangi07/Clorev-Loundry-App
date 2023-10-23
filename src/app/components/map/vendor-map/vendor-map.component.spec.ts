import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorMapComponent } from './vendor-map.component';

describe('VendorMapComponent', () => {
  let component: VendorMapComponent;
  let fixture: ComponentFixture<VendorMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
