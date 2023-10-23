import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModal, NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicePanelRegisterComponent } from './components/service-panel-register/service-panel-register.component';
import { HomeComponent } from './components/home/home.component';
import { SwiperModule } from 'swiper/angular';
import { VideoModule } from './components/video/video.module';
import { RegSuccessDialogComponent } from './models/reg-success-dialog/reg-success-dialog.component';
import { RateListComponent } from './components/rate-list/rate-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TermAndConditionsComponent } from './components/term-and-conditions/term-and-conditions.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';
import { SchedulePickupComponent } from './components/schedule-pickup/schedule-pickup.component';
import { PickupDeliveryComponent } from './components/pickup-delivery/pickup-delivery.component';
import { OrderSummeryComponent } from './components/order-summery/order-summery.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { DeliveryPartnerComponent } from './components/delivery-partner/delivery-partner.component';
import { DemoComponent } from './demo/demo.component';
import { Upload2Component } from './components/upload2/upload2.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ResponsileDisclosurePolicyComponent } from './responsile-disclosure-policy/responsile-disclosure-policy.component';
import {UserDataService} from './service/user-data.service';
import { RateListHeaderComponent } from './components/rate-list-header/rate-list-header.component';
import { ServiceProviderHeaderComponent } from './components/service-provider-header/service-provider-header.component';
import { OrderSummeryHeaderComponent } from './order-summery-header/order-summery-header.component';
import { SchedulePickupHeaderComponent } from './components/schedule-pickup-header/schedule-pickup-header.component';
import { GoogleMapComponent } from './components/map/user-map/google-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { VendorMapComponent } from './components/map/vendor-map/vendor-map.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicePanelRegisterComponent,
    HomeComponent, 
    RegSuccessDialogComponent,
    RateListComponent,
    FooterComponent,
    FaqComponent,
    TermAndConditionsComponent,
    UploadFilesComponent,
    ServiceProviderComponent,
    SchedulePickupComponent,
    PickupDeliveryComponent,
    OrderSummeryComponent,
    PaymentDetailsComponent,
    DeliveryPartnerComponent,
    DemoComponent,
    Upload2Component,
    NavbarComponent,
    HeaderComponent,
    PrivacyPolicyComponent,
    ResponsileDisclosurePolicyComponent,
    RateListHeaderComponent,
    ServiceProviderHeaderComponent,
    OrderSummeryHeaderComponent,
    SchedulePickupHeaderComponent,
    GoogleMapComponent,
    VendorMapComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    VideoModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule
    

  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
