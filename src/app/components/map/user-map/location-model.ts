
export class UserLocation {

   constructor(
       
    public city: string,
    public country: string,
    public fullAddress: string,
    public latitude: number,
    public longitude: number,
    public pincode: string,
    public state: string,
    public addressType: string,
    public userId: number 

   ){}

}