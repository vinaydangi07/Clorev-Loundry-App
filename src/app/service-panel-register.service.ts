import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

export interface ApiResponse {
  message: string;
  // Other properties you expect in the response
}

@Injectable({
  providedIn: 'root'
})
export class ServicePanelRegisterService {


  constructor(private http:HttpClient) { }

  dummy:any;
  headers: any;     
  qwerty:any; 
     
  
  
  fileUploadApi(event, id){
     const param = new HttpParams().set('vendorId', id);

   if(id == "shopFile"){
    return this.http.post<ApiResponse>('http://localhost:8000/clorev/uploadShopFile', event , { params: param});
   } else if ( id == "gstinFile"){
    return this.http.post<ApiResponse>('http://localhost:8000/clorev/uploadGstinFile', event , { params: param});
   } else if ( id == "panFile"){
    return this.http.post<ApiResponse>('http://localhost:8000/clorev/uploadPanFile', event , { params: param});
   } else if ( id == "msmeFile"){
    return this.http.post<ApiResponse>('http://localhost:8000/clorev/uploadMsmeFile', event , { params: param});
   } else if(id == "accountFile"){
    return this.http.post<ApiResponse>('http://localhost:8000/clorev/uploadAccountFile', event, {params: param});
  };


  };


  getAllVendors(){
    return this.http.get('http://localhost:8200/clorev/getAllVendors');
  }; 
  
  
  getAllRatingAndReviews(vendorId: number) {
    return this.http.get<any>(`http://localhost:8080/clorev/getRatings/${vendorId}`);
  };

  getAllRatingData(){
    return this.http.get<any>('http://localhost:8080/clorev/getAllRatings');
  }

  register(registerData: any): Observable<any> {
    // let headers = new Headers(); 
    // let header = new HttpHeaders({ 'content-type': 'application/json' });
    console.log("reched service"); 
    console.log(registerData);
    console.log( typeof registerData);
    // var x=this.http.get('http://localhost:5000/clorev/registerVendor',registerData)
    // console.log(x);           

    // return this.http.post('http://localhost:5000/clorev/registerVendor',registerData,{ headers: this.headers });
    this.qwerty= this.http.post('http://localhost:8000/clorev/registerVendor',registerData,{responseType:'text'});
    console.log(this.qwerty);
    return this.qwerty; 
  };      




      
 

    // const formData=new FormData();
    // formData.append('shopFile', file, file.name,);
    // formData.append('vendorId','154');
    // console.log("file uploaded"+formData);
    // return this.http.post('http://localhost:5000/clorev/uploadShopFile', formData)



}
       