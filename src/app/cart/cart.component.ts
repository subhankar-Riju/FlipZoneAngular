import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  Items:any[]=[];
  vari:any;

  constructor(private cart:CartService) { }
  

  ngOnInit(): void {
    this.cart.GetcartItems()
    .subscribe(data=>{
      this.vari=data;
      this.Items=this.vari;
      console.log(this.Items[0].quantity);
      
    })
    //this.Items=this.cart.Items;
  }

  IncrementValue(I:any){
   this.cart.incrementItem(I);
   console.log("incremented");
   this.Items.forEach(element => {
     if(element.email==I.email && element.p_id==I.p_id){
       element.quantity=++I.quantity
     }
   });
   //this.Items[0].quantity=++I.quantity;
    
  }

  decrementValue(I:any){
    this.cart.decrementItem(I);
   console.log("incremented");
   this.Items.forEach(element => {
     if(element.email==I.email && element.p_id==I.p_id){
       element.quantity=--I.quantity
     }
   });
  }

}
