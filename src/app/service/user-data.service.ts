import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private apiUrl = 'http://localhost:8080/api/category/';
  private apisubcategory='http://localhost:8080/api/subcategory/';

 

private datenextSource = new BehaviorSubject<string>('');
  currentdatenext = this.datenextSource.asObservable();

  private selectedServiceProviderSource = new BehaviorSubject<any>(null);
  selectedServiceProvider$ = this.selectedServiceProviderSource.asObservable();

  private selectedDate: any; 
  private chosenDate: any;
  private chosenTimeSlot: string = '';
  public laundaryTotalAmount = new BehaviorSubject(null);
  public tabSelected = new BehaviorSubject(null);
  public personName = new BehaviorSubject(null);
  public amountlistmen = new BehaviorSubject(null);
  
  

  setSelectedServiceProvider(serviceProvider: any) {
    this.selectedServiceProviderSource.next(serviceProvider);
  }


  updatedatenext(selectedTimeSlot: string) {
    this.datenextSource.next(selectedTimeSlot);
  }
  
  constructor(private http: HttpClient) {
    
   }
   getAllEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAllEmployeesubcategory(): Observable<any[]> {
    return this.http.get<any[]>(this.apisubcategory);
  }

  setTotalAmount(total : number){
    this.laundaryTotalAmount.next(total)
  }


  
  getTotalAmount(){
    return this.laundaryTotalAmount
  }
  settabSelected(total : number){
    this.tabSelected.next(total)
  }

  gettabSelected(){
    return this.tabSelected
  }
  getpersonName(){
    return this.tabSelected
  }

  setSelectedDate(selectedDate: any) {
    this.selectedDate = selectedDate;
  }

  getSelectedDate() {
    return this.selectedDate;
  }


  setChosenDate(chosenDate: any) {
    this.chosenDate = chosenDate;
  }

  getChosenDate() {
    return this.chosenDate;
  }

  setChosenTimeSlot(timeSlot: string) {
    this.chosenTimeSlot = timeSlot;
  }

  getChosenTimeSlot() {
    return this.chosenTimeSlot;
  };


  getTotalAmountForVendorList() {
    return this.laundaryTotalAmount.asObservable(); 
  }
}

