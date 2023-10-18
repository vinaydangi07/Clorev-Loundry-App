import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import {ResponsileDisclosurePolicyComponent} from './responsile-disclosure-policy/responsile-disclosure-policy.component';
import { RateListComponent } from './components/rate-list/rate-list.component';
import { ServicePanelRegisterComponent } from './components/service-panel-register/service-panel-register.component';
import { TermAndConditionsComponent } from './components/term-and-conditions/term-and-conditions.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';
import { SchedulePickupComponent} from './components/schedule-pickup/schedule-pickup.component';
import { PickupDeliveryComponent } from './components/pickup-delivery/pickup-delivery.component';
import { OrderSummeryComponent   } from './components/order-summery/order-summery.component';
import { PaymentDetailsComponent} from './components/payment-details/payment-details.component';
import { DeliveryPartnerComponent } from './components/delivery-partner/delivery-partner.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';

const routes: Routes = [
  { path : '' , redirectTo : 'home' , pathMatch : 'full'},
  { path : '' , component : HomeComponent },
  { path : 'service-panel' , component : ServicePanelRegisterComponent },
  { path : 'rate-list' , component : RateListComponent },
  { path  : 'choose-location' , component : GoogleMapComponent},
  { path : 'faq' , component : FaqComponent },
  { path : 'terms-and-conditions' , component : TermAndConditionsComponent },
  { path : 'privacy-policy' , component : PrivacyPolicyComponent },
  { path : 'service-provider', component : ServiceProviderComponent},
  { path : 'schedule-pickup', component : SchedulePickupComponent},
  { path : 'pickup-delivery' ,component : PickupDeliveryComponent},
  { path : 'order-summery', component :OrderSummeryComponent},
  { path : 'payment-details', component:PaymentDetailsComponent},
  { path : 'delivery-partner', component:DeliveryPartnerComponent},
  { path : 'responsile-disclosure-policy',component:ResponsileDisclosurePolicyComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
