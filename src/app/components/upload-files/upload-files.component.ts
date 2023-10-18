import { Component, Input, OnInit } from '@angular/core';
import { HttpClient ,HttpEventType} from '@angular/common/http';
import { UntypedFormGroup } from '@angular/forms';
import { ServicePanelRegisterService } from '../../service-panel-register.service';


@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  selectedFile:File;
  str="";
  gstinfile: File;

  message:string;
  message2:string;
  message3:string;
  message4:string;
  message5:string;
  dd:any;
  @Input() uploadfiles:UntypedFormGroup;
  @Input () idval:string;
  constructor(private http:HttpClient,private service:ServicePanelRegisterService) { }

  ngOnInit(): void {
    // this.dd=this.service.getdata().subscribe(data=>{this.dd=data
    // console.log(this.dd);

}
  shopFile(event)
  {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);

  }
  shopFileUpload()
  {
    console.log(this.selectedFile);
    const formData=new FormData();
    formData.append('shopFile', this.selectedFile, this.selectedFile.name,);
    formData.append('vendorId',this.idval);
    console.log("file uploaded"+formData);
    this.http.post('http://localhost:5000/clorev/uploadShopFile',formData).subscribe((response) => {
      if (response === 200) {
        this.message = 'File not uploaded successfully';
      } else {
        this.message = 'File uploaded successfully';
      }
    }
    );
    // return this.http.post('http://localhost:5000/clorev/uploadShopFile', formData)
    // this.service.upload(this.selectedFile).subscribe((event:any)=>{
    //   if(typeof (event)==='object')
    //   {
    //     this.str=event.link;

    //   }
    // })
  }
  GSTINFile(event:any)
  {
    console.log("Inside GSTINfile change");
    this.gstinfile = event.target.files[0];
  }
  GSTINFileUpload()
  {

    console.log(this.selectedFile);
    const formData=new FormData();
    formData.append('gstinFile', this.gstinfile, this.gstinfile.name,);
    formData.append('vendorId',this.idval);
    console.log("file uploaded"+formData);
    this.http.post('http://localhost:5000/clorev/uploadGstinFile',formData).subscribe((response) => {
      if (response === 200) {
        this.message2 = 'File not uploaded successfully';
      } else {
        this.message2 = 'File uploaded successfully';
      }
    }
    );


  }
  pancard(event)
  {
    console.log("Inside Onfile change");
    this.selectedFile = event.target.files[0];
  }
  pancardUpload()
  {

    console.log(this.selectedFile);
    const formData=new FormData();
    formData.append('panFile', this.selectedFile, this.selectedFile.name,);
    formData.append('vendorId',this.idval);
    console.log("file uploaded"+formData);
    this.http.post('http://localhost:5000/clorev/uploadPanFile',formData).subscribe((response) => {
      if (response === 200) {
        this.message3 = 'File not uploaded successfully';
      } else {
        this.message3 = 'File uploaded successfully';
      }
    }
    );
  }
  MSME(event)
  {
    console.log("Inside Onfile change");
    this.selectedFile = event.target.files[0];
  }
  MSMEUpload()
  {
    console.log(this.selectedFile);
    const formData=new FormData();
    formData.append('msmeFile', this.selectedFile, this.selectedFile.name,);
    formData.append('vendorId',this.idval);
    console.log("file uploaded"+formData);
    this.http.post('http://localhost:5000/clorev/uploadMsmeFile',formData).subscribe((response) => {
      if (response === 200) {
        this.message4 = 'File not uploaded successfully';
      } else {
        this.message4 = 'File uploaded successfully';
      }
    }
    );
  }
  bankaccount(event)
  {
    console.log("Inside Onfile change");
    this.selectedFile = event.target.files[0];
  }
  bankaccountUpload()
  {
    console.log(this.selectedFile);
    const formData=new FormData();
    formData.append('accountFile', this.selectedFile, this.selectedFile.name,);
    formData.append('vendorId',this.idval);
    console.log("file uploaded"+formData);
    this.http.post('http://localhost:5000/clorev/uploadAccountFile',formData).subscribe((response) => {
      if (response === 200) {
        this.message5 = 'File not uploaded successfully';
      } else {
        this.message5 = 'File uploaded successfully';
      }
    }
    );
  }

}
