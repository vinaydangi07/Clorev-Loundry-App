import { TestBed } from '@angular/core/testing';

import { ServicePanelRegisterService } from './service-panel-register.service';

describe('ServicePanelRegisterService', () => {
  let service: ServicePanelRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePanelRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
