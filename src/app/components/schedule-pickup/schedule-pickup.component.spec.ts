// import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchedulePickupComponent } from './schedule-pickup.component';

// describe('SchedulePickupComponent', () => {
//   let component: SchedulePickupComponent;
//   let fixture: ComponentFixture<SchedulePickupComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ SchedulePickupComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SchedulePickupComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [SchedulePickupComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SchedulePickupComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'date-printer'`, () => {
    const fixture = TestBed.createComponent(SchedulePickupComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('date-printer');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SchedulePickupComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('date-printer app is running!');
  });
});