import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { BuyService } from '../services/buy.service';
import { CartService } from '../services/cart.service';
import { MobileService } from '../services/mobile.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  Mobiles:any[]=[];
  Data:any;
  searchData!:string;
  filterUsed:string="";
  ratingArray:string[]=["default","rating < 2","rating > 4","rating 3 To 4"];
  filterArray!:string[];
  innerfillter:string="";
  

  constructor(private mobileService:MobileService,private buyService:BuyService,
    private cart:CartService,
    private router:Router) { }

  ngOnInit(): void {
    
    this.mobileService.GetMobiles()
    .subscribe((data1)=>{
     // this.mobileService.maxCursor=data1.count;
     this.Data=data1;
     this.Mobiles=this.Data.data;
      console.log(this.Mobiles);
      //console.log();
    },
    (err)=>{
      console.log(err.status);
      
    });
    
}

  Buy(mob:any){
    this.buyService.buyFromCategory=mob;
    this.router.navigate(['/buy']);
  }

  AddToCart(m:any){
    var body={
      email:"Riju@gmail",
      p_id: m.p_id,
      brand: m.brand,
      model: m.model,
      price: m.price,
      quantity: 1,
      rating: m.rating

    }

    this.cart.AddToCart(body).subscribe(data=>{
      if(data==-1){
        alert("Already present in the cart");
      }
      else{
        
      }      
    });
  }

  SearchOn(){
    this.mobileService.bodyGetMobiles.searchMobile=this.searchData;
    this.mobileService.GetMobiles()
    .subscribe((data1)=>{
     this.Data=data1;
     this.Mobiles=this.Data.data;
      console.log(this.Mobiles);
    },
    (err)=>{
      console.log(err.status);
      
    });
  }

//filter on rating or price
  filterChange(event:Event){
    console.log(this.filterUsed);
    if(this.filterUsed=="rating"){
        this.filterArray=this.ratingArray;
    }
    else{
      this.filterArray=[];
    }
    
  }

  //apply the filter
  applyfilter(){
    //"rating < 2","rating > 4","rating 3 To 4"
    if(this.innerfillter=="rating < 2"){
        this.mobileService.bodyGetMobiles.filterRatinglt2=1;
        this.mobileService.bodyGetMobiles.filterRatinggt4=0;
        this.mobileService.bodyGetMobiles.filterRating3t4=0;
    }
    if(this.innerfillter=="rating > 4"){
      this.mobileService.bodyGetMobiles.filterRatinggt4=1;
      this.mobileService.bodyGetMobiles.filterRating3t4=0;
      this.mobileService.bodyGetMobiles.filterRatinglt2=0;
      console.log(">4");
      
    }
    if(this.innerfillter=="rating 3 To 4"){
      this.mobileService.bodyGetMobiles.filterRating3t4=1;
      this.mobileService.bodyGetMobiles.filterRatinglt2=0;
      this.mobileService.bodyGetMobiles.filterRatinggt4=0;
      console.log("3to4");
      
    }
    this.mobileService.GetMobiles()
    .subscribe((data1)=>{
     this.Data=data1;
     this.Mobiles=this.Data.data;
      console.log(this.Mobiles);
    },
    (err)=>{
      console.log(err.status);
      
    });

  }

 
}


