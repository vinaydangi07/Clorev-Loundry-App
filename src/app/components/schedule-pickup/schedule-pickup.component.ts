// import { UserDataService } from './../../service/user-data.service';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-schedule-pickup',
//   templateUrl: './schedule-pickup.component.html',
//   styleUrls: ['./schedule-pickup.component.css']
// })
// export class SchedulePickupComponent implements OnInit {
//   dates: string[] = [];
//   days: string[] = [];
//   months: string[] = [];
//   selectedDate: DateData | undefined;
//   nextDates: DateData[] = [];

//   constructor() { }

//   ngOnInit(): void {
//     const today = new Date();

//     const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//     for (let i = 0; i < 5; i++) {
//       const currentDate = new Date(today);
//       currentDate.setDate(today.getDate() + i);

//       const formattedDate = (currentDate.getDate() < 10 ? "0" : "") + currentDate.getDate();
//       const dayOfWeek = i === 0 ? "Today" : i === 1 ? "Tomorrow" : weekdays[currentDate.getDay()];
//       const month = allMonths[currentDate.getMonth()];

//       this.dates.push(formattedDate);
//       this.days.push(dayOfWeek);
//       this.months.push(month);
//     }
//   }

//   onDateClicked(index: number): void {
//     const selectedDate = this.dates[index];
//     const selectedMonth = this.months[index];
//     const selectedDay = this.days[index];

//     this.selectedDate = {
//       date: selectedDate,
//       monthIndex: this.months.indexOf(selectedMonth),
//       dayIndex: this.days.indexOf(selectedDay)
//     };

//     const startIndex = index + 1;
//     const endIndex = Math.min(startIndex + 5, this.dates.length - 1);
//     this.nextDates = this.dates.slice(startIndex, endIndex + 1).map((date, i) => {
//       const monthIndex = this.selectedDate.monthIndex;
//       const dayIndex = this.selectedDate.dayIndex + i + 1;
//       return {
//         date,
//         monthIndex,
//         dayIndex
//       };
//     });
//   }
// }

// interface DateData {
//   date: string;
//   monthIndex: number;
//   dayIndex: number;
// }
import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/service/user-data.service';
@Component({
  selector: 'app-root',
  template: `
  <app-child (onTimeSlotClick)="onTimeSlotClick($event)"></app-child>
`,
  templateUrl: './schedule-pickup.component.html',
  styleUrls: ['./schedule-pickup.component.css']
})

export class SchedulePickupComponent implements OnInit {
  title = "hello";
  dates: Date[] = [];
  selectedDateIndex: number | null = null;
  nextFiveDates: Date[] = [];
  datenext: string = '';
  constructor(public userService : UserDataService){}

  ngOnInit() {
    this.createDates();
    this.selectedDateIndex = this.dates.findIndex(date => this.isToday(date));
    this.selectDate(this.selectedDateIndex);
  };



 

  createDates() {
    const today = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 4);

    while (today <= endDate) {
      this.dates.push(new Date(today));
      today.setDate(today.getDate() + 1);
    }
  }

  // selectDate(index: number) {
  //   this.selectedDateIndex = index;
  //   this.nextFiveDates = this.calculateNextFiveDates();
  //   console.log(this.selectDate)
  // }

 
  // selectDate(index: number) {
  //   const selectedDate = this.dates[index];
  //   console.log('Selected Date:', selectedDate); // Log the selected date to the console
  //   this.nextFiveDates = this.calculateNextFiveDates();
  // }

  calculateNextFiveDates(): Date[] {
    if (this.selectedDateIndex === null) {
      return [];
    }

    const startDate = new Date(this.dates[this.selectedDateIndex]);
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 4); // Add 4 days to the end date (total 5 days)

    const dates: Date[] = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Check if the last date is the same as the endDate
    // If not, push the endDate to ensure it's included
    if (dates[dates.length - 1].getTime() !== endDate.getTime()) {
      dates.push(new Date(endDate));
    }

    return dates;
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  isTomorrow(date: Date): boolean {
    const today = new Date();
    const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    return (
      date.getDate() === tomorrow.getDate() &&
      date.getMonth() === tomorrow.getMonth() &&
      date.getFullYear() === tomorrow.getFullYear()
    );
  }
  getFullWeekdayName(date: Date): string {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekdays[date.getDay()];
  }
  //   onTimeSlotClick(selectedTimeSlot: string) {
  //   // console.log('Selected Time Slot:', selectedTimeSlot);
  //   this.datenext=selectedTimeSlot;

  //   console.log(this.datenext)
  // }

  onTimeSlotClick(selectedTimeSlot: string) {
    this.datenext = selectedTimeSlot;
    this.userService.updatedatenext(selectedTimeSlot);
  }
  selectDate(index: number) {
    this.selectedDateIndex = index;
    this.nextFiveDates = this.calculateNextFiveDates();
    
    // Assuming you have an array of dates called "dates" that you are using to select the date.
    const selectedDate = this.dates[index];
   
    this.userService.setSelectedDate(selectedDate);
    // console.log(selectedDate);
  }


  onDateChosen(chosenDate: any) {
    this.userService.setChosenDate(chosenDate);

  }

  onTimeSlotChosen(timeSlot: string) {
    this.userService.setChosenTimeSlot(timeSlot);
  }
  // selectDate(index: number) {
  //   // Your existing logic to select the date
  //   const selectedDate = this.dates[index];
  //   this.userService.setSelectedDate(selectedDate);
  // }

  
  // selectDate(index: number) {
  //   const selectedDate = this.dates[index];
  //   console.log('Selected Date:', selectedDate);
  // }
  
}



