import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsileDisclosurePolicyComponent } from './responsile-disclosure-policy.component';

describe('ResponsileDisclosurePolicyComponent', () => {
  let component: ResponsileDisclosurePolicyComponent;
  let fixture: ComponentFixture<ResponsileDisclosurePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsileDisclosurePolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsileDisclosurePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
