import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cursor=0;
  count=5;
  Items:any[]=[];
  vari:any;

  constructor(private http:HttpClient,private account:AccountService) { }

  GetcartItems(){
    return this.http
    .get("https://localhost:5001/GetCartItems/Riju@gmail/"+this.count+"/"+this.cursor);
    }

  incrementItem(body:any){
    this.http.post("https://localhost:5001/incrementqantity/1",body)
    .subscribe(data=>{
      console.log("+1");
      
    });
  }

  decrementItem(body:any){
    this.http.post("https://localhost:5001/incrementqantity/-1",body)
    .subscribe(data=>{
      console.log("-1");
      
    });
  }

  DeleteFromCart(email:string,p_id:string){
    return this.http.delete("https://localhost:5001/deleteFromcart/"+email+"/"+p_id);
    
  }

  AddToCart(body:any){
    return this.http.post("https://localhost:5001/AddToCart",body);
    
  }


}
