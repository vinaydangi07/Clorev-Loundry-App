import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormBuilder, UntypedFormGroup, Validators,UntypedFormArray,UntypedFormControl} from '@angular/forms';
import { RegSuccessDialogComponent } from 'src/app/models/reg-success-dialog/reg-success-dialog.component';
import { ServicePanelRegisterService } from '../../service-panel-register.service';
import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule,Router } from '@angular/router';

declare var getimg;
declare var closeImage;
declare var submitVendorFormData;
@Component({
  selector: 'app-service-panel-register',
  templateUrl: './service-panel-register.component.html',
  styleUrls: ['./service-panel-register.component.css']
})

export class ServicePanelRegisterComponent implements OnInit {
  callGetImgFunction(event,id){
    getimg(event,id);
  }
  callcloseImageFunction(inputId,dpUpload,dpImg,dpImgClose){
    closeImage(inputId,dpUpload,dpImg,dpImgClose);
  }
  submitVendorForm(){
    submitVendorFormData();
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
    

    
  constructor(private modalService: NgbModal,private formBuilder: UntypedFormBuilder, private servicePanelRegisterService:ServicePanelRegisterService,private http:HttpClient,private router: Router) { }

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
      // ShopNameImg: ['',Validators.required]
    });
    console.log(this.registerForm.value); 
  }
  
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
    this.servicePanelRegisterService.shopImg(this.registerForm.value).subscribe((sucess)=>{
      console.log("Image Uploaded");
    })


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
    // name() {
    //   alert("name function");
    // }
    // redirectToSuccessComponent(): void{
    //   // this.router.navigateByUrl("app-success-submited");
    //   // alert("hello");
      
    // }

  
    openModal(content: any): void {
      const modalRef = this.modalService.open(content, { centered: true });
  
      setTimeout(() => {
        modalRef.close();
        this.router.navigateByUrl(''); // Replace '/other-page' with the actual URL of the page you want to navigate to
      }, 5000);
    }
    

}



