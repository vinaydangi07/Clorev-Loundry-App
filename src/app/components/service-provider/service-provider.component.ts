

import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServicePanelRegisterService } from 'src/app/service-panel-register.service';
import { MapService } from 'src/app/service/map.service';
import { UserDataService } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.css']
})
export class ServiceProviderComponent implements OnInit {
  vendorSub : Subscription;
  ratingSub : Subscription;
  selectedVendor;
  vendorsArray: any[] = [];
  userRatings: any[] = []; // User ratings for the selected vendor
  // ratingsData: any = {};
  rateAmount: number;
  ratingData : any[] = [];

  constructor(
    public userService: UserDataService,
    private mapService: MapService,
    private servicePanelService: ServicePanelRegisterService,
    private el: ElementRef
  ) {} 

  ngOnInit(): void {
    this.mapService.initializeMap(this.el.nativeElement.querySelector('#map'));

    this.servicePanelService.getAllRatingData().subscribe(ratingData => {
      this.ratingData = ratingData;
      console.log(ratingData);
      // this.calculateAggregateRatings();
      this.getAllVendors();
    });

    this.userService.getTotalAmount().subscribe( vendorRate => {
      this.rateAmount = vendorRate;
       console.log('Vendor Rate:' , vendorRate);
    })
  }
  
  

  getAllVendors() {
      this.servicePanelService.getAllVendors().subscribe((data: any) => {
      this.vendorsArray = data;
      console.log(this.vendorsArray)
      this.calculateAggregateRatings();
      // this.servicePanelService.getAllRatingAndReviews(data.vendorId)
    });
  }


  onSelectVendor(vendor) {
    this.selectedVendor = vendor;
    this.userService.setSelectedServiceProvider(vendor);
     this.servicePanelService.getAllRatingAndReviews(vendor.vendorId).subscribe(userratings => {
      this.userRatings = userratings;
      console.log(this.userRatings)
    })
 };


 calculateAggregateRatings() {
  for (const vendor of this.vendorsArray) {
    const vendorRatings = this.ratingData.filter(rating => rating.vendorId === vendor.vendorId);
    const totalRatings = vendorRatings.length;
    const totalReviews = vendorRatings.length;
    let sumRatings = 0;

    let ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

    for (const rating of vendorRatings) {
      sumRatings += rating.rating;
      ratingCounts[rating.rating]++; 
    }

    const averageRating = totalRatings > 0 ? parseFloat((sumRatings / totalRatings).toFixed(1)) : 0.0;
    vendor['averageRating'] = averageRating;
    vendor['totalRatings'] = totalRatings;
    vendor['totalReviews'] = totalReviews;
    vendor['ratingCounts'] = ratingCounts;

    const dynamicPrice = this.calculateDynamicPrice(vendor);
    vendor['vendorPrice'] = dynamicPrice; 
  }
}

calculateDynamicPrice(vendor): number {
  if (vendor && vendor.totalRatings) {
    const cartValue = this.rateAmount; // Your rateAmount from the service
    const avgRating = vendor.averageRating;
    return (cartValue * (1 + (avgRating - 3) * 0.1));
  } else {
    return 0; // Handle the case where vendor or totalRatings is not available
  }
}


 




getPercentage(star: number) {
  if (this.selectedVendor) {
    return (this.selectedVendor.ratingCounts[star] / this.selectedVendor.totalRatings) * 100;
  }
  return 0;
}


}