import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/service/user-data.service';
declare var Razorpay: any;
@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  options = {
    "key": "rzp_test_ib5Wh7E8yomgPs", // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp", // Your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    //"order_id": "order_9A33XWu170gUtm", // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": {
      "name": "Gaurav Kumar", // Your customer's name
      "email": "gaurav.kumar@example.com",
      "contact": "9000090000" // Provide the customer's phone number for better conversion rates
    },
    "notes": {
      "address": "Razorpay Corporate Office"
    },
    "theme": {
      "color": "#3399cc"
    },
    "fullscreen": true // Set this to true to enable full-screen mode for the payment gateway
  };

  rzp1: any; // Declare rzp1 property

  constructor(private UserDataService: UserDataService) {}

  ngOnInit() {
    this.loadRazorpay();
  }

  loadRazorpay() {
    if (!this.rzp1) {
      this.rzp1 = new Razorpay(this.options);
      this.rzp1.open(); // Automatically open the payment gateway
    }
  }
}



