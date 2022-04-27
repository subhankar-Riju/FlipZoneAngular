import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { BuyService } from '../services/buy.service';
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

  constructor(private cart:CartService,private router:Router,private buy:BuyService) { }
  

  ngOnInit(): void {
    this.GetCartItems();
    //this.Items=this.cart.Items;
  }
  GetCartItems(){
    this.cart.GetcartItems()
     .subscribe(data=>{
       console.log(data);
       
       this.vari=data;
       this.Items=this.vari.record;
       this.totalPrice=this.vari.totalPrice;
       
     });
  }

  IncrementValue(I:any){
   this.cart.incrementItem(I)
   .subscribe(data=>{
     console.log(data);
     //
     this.GetCartItems();
     //
     
   });
   console.log("increment clicked");
   
  
  //  console.log("incremented");
  //  this.Items.forEach(element => {
  //    if(element.email==I.email && element.p_id==I.p_id){
  //      element.quantity=++I.quantity;
  //      this.totalPrice+=I.price;
  //    }
  //  });
   //this.Items[0].quantity=++I.quantity;
    
  }

  decrementValue(I:any){
    if(I.quantity>1){
    this.cart.decrementItem(I)
    .subscribe(data=>{
      this.GetCartItems();
    })
   console.log("decremented");
   
  }
  }

  DelFromCart(I:any){
    this.cart.DeleteFromCart(I.email,I.p_id)
    .subscribe(data=>{
      console.log(data);
      if(data==1){
        this.cart.GetcartItems()
        .subscribe(data=>{
          this.vari=data;
          this.Items=this.vari.record;
          this.totalPrice=this.vari.totalPrice;
          
        });
      }
    });
    
   
    
  }

  BuyAll(){
    this.buy.buyFromCart=true;
    this.router.navigate(['/buy']);
  }

  Buy(mob:any){
    mob.quantity=1;
    this.buy.singleBuy=mob;
    this.router.navigate(['/buy']);
  }

}
