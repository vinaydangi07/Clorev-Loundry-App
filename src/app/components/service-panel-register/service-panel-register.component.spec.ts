import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePanelRegisterComponent } from './service-panel-register.component';

describe('ServicePanelRegisterComponent', () => {
  let component: ServicePanelRegisterComponent;
  let fixture: ComponentFixture<ServicePanelRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicePanelRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePanelRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


