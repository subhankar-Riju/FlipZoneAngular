import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  Items:any[]=[];
  vari:any;
  totalPrice:any;
  deletedFromCart!:number;

  constructor(private cart:CartService,private router:Router) { }
  

  ngOnInit(): void {
    this.cart.GetcartItems()
    .subscribe(data=>{
      this.vari=data;
      this.Items=this.vari.record;
      this.totalPrice=this.vari.totalPrice;
      
    })
    //this.Items=this.cart.Items;
  }

  IncrementValue(I:any){
   this.cart.incrementItem(I);
   console.log("incremented");
   this.Items.forEach(element => {
     if(element.email==I.email && element.p_id==I.p_id){
       element.quantity=++I.quantity;
       this.totalPrice+=I.price;
     }
   });
   //this.Items[0].quantity=++I.quantity;
    
  }

  decrementValue(I:any){
    if(I.quantity>1){
    this.cart.decrementItem(I);
   console.log("incremented");
   this.Items.forEach(element => {
     if(element.email==I.email && element.p_id==I.p_id){
       element.quantity=--I.quantity;
       this.totalPrice-=I.price;
     }
   });
  }
  }

  DelFromCart(I:any){
    this.cart.DeleteFromCart(I.email,I.p_id)
    .subscribe(data=>{
      console.log(data);
      if(data==1){
        
      }
    });
    
    
  }

}
