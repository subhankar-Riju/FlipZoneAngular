import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class BuyService implements OnDestroy{

  buyFromCategory:any;
  singleBuy=null;
  count=10;
  cursor=0;


  buyFromCart=false;

  constructor(private http:HttpClient,private account:AccountService) {  }
  ngOnDestroy(): void {
    this.buyFromCategory=null;
  }

  GetAddress(email:string){
    return this.http.get('https://localhost:5001/GetAddress/'+email);
  }

  PostOrPutAddress(body:any){
    return this.http.post("https://localhost:5001/api/Address/PostAddress",body);
  }

  BuyMobile(mob:any,email:string){
    return this.http.post("https://localhost:5001/BuyMobile/"+this.account.Logged_email,mob);
  }

  BuyHistory(){
    
    return this.http.get("https://localhost:5001/History/"+ this.account.Logged_email+"/"+this.count+"/"+this.cursor);
  }
}
