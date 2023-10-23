import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicePanelRegisterService {


  constructor(private http:HttpClient) { }

  dummy:any;
  headers: any;
  qwerty:any; 
     
  shopImg(shopImgData:any):Observable<any>{
    let headers = new Headers(); 
    let param = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.post('http://localhost:5000/clorev/uploadShopFile',shopImgData,{headers: this.headers })

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
  }
 

    // const formData=new FormData();
    // formData.append('shopFile', file, file.name,);
    // formData.append('vendorId','154');
    // console.log("file uploaded"+formData);
    // return this.http.post('http://localhost:5000/clorev/uploadShopFile', formData)



}
