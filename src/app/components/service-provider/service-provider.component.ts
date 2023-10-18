import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/service/user-data.service';
@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.css']
})
export class ServiceProviderComponent implements OnInit {

  serviceProviders = [
    {
      name: 'CRW-01 (DEL)',
      rating: 2.5,
      numRatings: '00',
      discountPrice:700,
      price: 700
    },
    {
      name: 'CRW-02 (DEL)',
      rating: 3.5,
      numRatings: '00',
      discountPrice:600,
      price: 600
    },
  ]
  constructor(public userService : UserDataService) { }

  ngOnInit(): void {
  }
  
    selectedServiceProvider: any;

    // onServiceProviderSelect(serviceProvider: any) {
    //   this.userService.setSelectedServiceProvider(serviceProvider);
    // }
    // onServiceProviderSelect(serviceProvider: any) {
    //   this.selectedServiceProvider = serviceProvider;
    //   console.log(serviceProvider); // This will print the selected service provider to the console.
    // }

    
  onServiceProviderSelect(serviceProvider: any) {
    this.userService.setSelectedServiceProvider(serviceProvider);
  }

}
