import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/service/map.service';
import { UserDataService } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-order-summery',
  template: `
  <button (click)="onSlotClick('Time Slot 1')">Time Slot 1</button>
  <button (click)="onSlotClick('Time Slot 2')">Time Slot 2</button>
  <p>Selected Time Slot: {{ datenext }}</p>
  ,
  <div *ngIf="selectedServiceProvider">
      <h3>Selected Service Provider:</h3>
      <p>Name: {{ selectedServiceProvider.name }}</p>
      <p>Rating: {{ selectedServiceProvider.rating }}</p>
      <p>Number of Ratings: {{ selectedServiceProvider.numRatings }}</p>
      <p>Price: ₹{{ selectedServiceProvider.price }} /-</p>
    </div>
`,

  templateUrl: './order-summery.component.html',
  styleUrls: ['./order-summery.component.css']
})
export class OrderSummeryComponent implements OnInit {
  selectedDate: any;
  chosenDateData: any;
  chosenTimeSlotData: string = ''; 
  locationName;
  public laundaryTotal: number | undefined;
  public dcTotal;
  public spTotal;
  public shoeTotal;
public personName;
  public tabName;
public amountListMen
datenext: string = '';
selectedServiceProvider: any; 
  constructor(public userService : UserDataService, private mapService: MapService) { }

  ngOnInit(): void {

    this.userService.selectedServiceProvider$.subscribe((selectedServiceProvider) => {
      this.selectedServiceProvider = selectedServiceProvider;
    });
    this.selectedDate = this.userService.getSelectedDate();

    this.chosenDateData = this.userService.getChosenDate();

    this.chosenTimeSlotData = this.userService.getChosenTimeSlot();

    this.userService.gettabSelected().subscribe(tab => {
      this.tabName = tab
    })
    this.userService.currentdatenext.subscribe(datenext => this.datenext = datenext);
  
    this.userService.getpersonName().subscribe(personData => {
      this.personName = personData
    })
    
    
    this.userService.getTotalAmount().subscribe(data => {
      if(this.tabName === "laundary"){
        this.laundaryTotal = data;
      }
      else if(this.tabName === "dc"){
        this.dcTotal = data;
      }
      else if(this.tabName === "sp"){
        this.spTotal = data;
      }
      else if(this.tabName === "shoe"){
        this.shoeTotal = data;
      }
     
    })
    //console.log(this.userService.getTotalAmount())

     this.mapService.locationNameUpdated.subscribe( data => {
       this.locationName = data;
     })
     

  }
  onSlotClick(selectedTimeSlot: string) {
    this.userService.updatedatenext(selectedTimeSlot);

  };


  calculateTextareaRows(content: string){
         
    const contentLenth = content ? content.length : 0;
    const characterPerRow = 30;
    const calculatedRow = Math.max(Math.ceil(contentLenth / characterPerRow));
    
    return calculatedRow;

}

  

}
