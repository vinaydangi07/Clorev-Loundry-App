import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicePanelRegisterService } from '../../service-panel-register.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators,UntypedFormArray,UntypedFormControl} from '@angular/forms';
import { RegSuccessDialogComponent } from 'src/app/models/reg-success-dialog/reg-success-dialog.component';
import { HttpClient } from '@angular/common/http';

declare var getimg;
declare var closeImage;
@Component({
  selector: 'app-delivery-partner',
  templateUrl: './delivery-partner.component.html',
  styleUrls: ['./delivery-partner.component.css']
})
export class DeliveryPartnerComponent implements OnInit {
  callGetImgFunction(event,id){
    getimg(event,id);
  }
  callcloseImageFunction(inputId,dpUpload,dpImg,dpImgClose){
    closeImage(inputId,dpUpload,dpImg,dpImgClose);
  }
  registerForm: UntypedFormGroup;
  data : any;
  resmsg:any;
  fileName='';
  loadcomponent:boolean;
  x=false;
  submittedValue: any;
  websiteList = [
    { id: 1, name: 'Laundry' },
    { id: 2, name: 'Dry Cleaning' },
    { id: 3, name: 'Steam Press' },
    { id: 4, name: 'Shoe and leather care' },
    { id: 5, name: 'Fumigation and Sanitation' }
    ]; 

  constructor(private modalService: NgbModal,private formBuilder: UntypedFormBuilder, private servicePanelRegisterService:ServicePanelRegisterService,private http:HttpClient) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      designation: ['', Validators.required],
      name: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      emailId: ['', Validators.required],
      altMobileNumber: ['', Validators.required],
      shopName: ['', Validators.required],
      gstin: ['', Validators.required],
      panNumber: ['', Validators.required],
      uamNumber: ['', Validators.required],
      accountHolderName: ['', Validators.required],
      accountNumber: ['', Validators.required],
      branchIfscCode: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      serviceOffered: this.formBuilder.array([], [Validators.required]),
      // serviceOffered: ['', Validators.required],
      expressDeliveryFlag: [true, Validators.required],
      weeklyOff: ['', Validators.required],
      landmark: ['', Validators.required]
  });
}



// shopNameImg(event){
//   if(event.target.files.length>0)
//   {
//     const file=event.target.files[0];
//     this.registerForm.get('ShopNameImg').setValue(file);
//   }
//   const formData=new FormData()
//   formData.append('file',this.registerForm.get('ShopNameImg').value);
//   //this.deliveryPartnerComponent.shopImg(this.registerForm.value).subscribe((sucess)=>{
//   //  console.log("Image Uploaded");
//   //})


// }




    // console.log("shopNameImg "+this.registerForm.get('shopNameImg').value);


  //   if(!this.registerForm.get('designation').value){
  //     this.registerForm.get('designation').setValue("Mr");
  //   }
  //   console.log(this.registerForm.value);
  //   console.log("Reached Componenet"+this.registerForm.value);
  //   this.deliveryPartnerComponent.register(this.registerForm.value).subscribe(
  //     //  success=>console.log(success.map(response=>response.json())),

  //     response => { this.resmsg=response; console.log(this.resmsg); }


  //   );
  //   console.log(this.resmsg);
  
  onchange(e) {
    const serviceOffered: UntypedFormArray = this.registerForm.get('serviceOffered') as UntypedFormArray;
    if (e.target.checked) {
      serviceOffered.push(new UntypedFormControl(e.target.value));
      console.log(serviceOffered.value)

    } else {
       const index = serviceOffered.controls.findIndex(x => x.value === e.target.value);
       serviceOffered.removeAt(index);

    }

  }
  uploadfiles()
  {
    this.loadcomponent=true;

  }

  shopNameImg(event){
    if(event.target.files.length>0)
    {
      const file=event.target.files[0];
      this.registerForm.get('ShopNameImg').setValue(file);
    }
    const formData=new FormData()
    formData.append('file',this.registerForm.get('ShopNameImg').value);
    // this.servicePanelRegisterService.shopImg(this.registerForm.value).subscribe((sucess)=>{
    //   console.log("Image Uploaded");
    // })


  }

  open() {
    const modalRef = this.modalService.open(RegSuccessDialogComponent);
    modalRef.componentInstance.lesson = this.data;
  }
  register(){

      // console.log("shopNameImg "+this.registerForm.get('shopNameImg').value);


      if(!this.registerForm.get('designation').value){
        this.registerForm.get('designation').setValue("Mr");
      }
      console.log(this.registerForm.value);
      console.log("Reached Componenet"+this.registerForm.value);
      this.servicePanelRegisterService.register(this.registerForm.value).subscribe(
        //  success=>console.log(success.map(response=>response.json())),

        response => { this.resmsg=response; console.log(this.resmsg); }


      );
      console.log(this.resmsg);
    }
  }