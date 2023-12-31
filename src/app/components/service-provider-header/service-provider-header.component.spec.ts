import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderHeaderComponent } from './service-provider-header.component';

describe('ServiceProviderHeaderComponent', () => {
  let component: ServiceProviderHeaderComponent;
  let fixture: ComponentFixture<ServiceProviderHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProviderHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceProviderHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
