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
  Reset=false;
  searchData!:string;
  filterUsed:string="";
  ratingArray:string[]=["rating < 2","rating > 4","rating 3 To 4"];
  priceArray:string[]=["price < 30k","price 30k to 60k","price 60k to 90k","price > 90k"]
  filterArray!:string[];
  innerfillter:string="";
  

  constructor(public mobileService:MobileService,private buyService:BuyService,
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
    //this.buyService.buyFromCategory=mob;
    mob.quantity=1;
    this.buyService.singleBuy=mob;
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
    //this.mobileService.bodyGetMobiles.searchMobile=this.searchData;
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
    if(this.filterUsed=="price"){
      this.filterArray=this.priceArray;
    }
    if(this.filterUsed==""){
      this.filterArray=[];
      this.Reset=true;
      console.log("Reset true");
      


    
    }
    
  }

  //apply the filter
  applyfilter(){
    
    if(this.Reset){
      console.log("Reset exc");
      
      this.mobileService.bodyGetMobiles.filterRatinglt2=0;
      this.mobileService.bodyGetMobiles.filterRatinggt4=0;
      this.mobileService.bodyGetMobiles.filterRating3t4=0;

      this.mobileService.bodyGetMobiles.filterPrice30t60=0;
      this.mobileService.bodyGetMobiles.filterPrice60t90=0;
      this.mobileService.bodyGetMobiles.filterPricegt90=0;
      this.mobileService.bodyGetMobiles.filterPricelt30=0;
      this.innerfillter="";
     // this.GetMobiles();
    }
    this.Reset=false;
    //"rating < 2","rating > 4","rating 3 To 4"
    if(this.innerfillter=="rating < 2"){
        this.mobileService.bodyGetMobiles.filterRatinglt2=1;
        this.mobileService.bodyGetMobiles.filterRatinggt4=0;
        this.mobileService.bodyGetMobiles.filterRating3t4=0;

        this.mobileService.bodyGetMobiles.filterPrice30t60=0;
        this.mobileService.bodyGetMobiles.filterPrice60t90=0;
        this.mobileService.bodyGetMobiles.filterPricegt90=0;
        this.mobileService.bodyGetMobiles.filterPricelt30=0;
    }
    if(this.innerfillter=="rating > 4"){
      this.mobileService.bodyGetMobiles.filterRatinggt4=1;
      this.mobileService.bodyGetMobiles.filterRating3t4=0;
      this.mobileService.bodyGetMobiles.filterRatinglt2=0;

      this.mobileService.bodyGetMobiles.filterPrice30t60=0;
      this.mobileService.bodyGetMobiles.filterPrice60t90=0;
      this.mobileService.bodyGetMobiles.filterPricegt90=0;
      this.mobileService.bodyGetMobiles.filterPricelt30=0;
      console.log(">4");
      
    }
    if(this.innerfillter=="rating 3 To 4"){
      this.mobileService.bodyGetMobiles.filterRating3t4=1;
      this.mobileService.bodyGetMobiles.filterRatinglt2=0;
      this.mobileService.bodyGetMobiles.filterRatinggt4=0;

      this.mobileService.bodyGetMobiles.filterPrice30t60=0;
      this.mobileService.bodyGetMobiles.filterPrice60t90=0;
      this.mobileService.bodyGetMobiles.filterPricegt90=0;
      this.mobileService.bodyGetMobiles.filterPricelt30=0;
      console.log("3to4");
      
    }

    //price < 30k","price 30k to 60k","price 60k to 90k","price > 90k

    if(this.innerfillter=="price < 30k"){
      this.mobileService.bodyGetMobiles.filterRating3t4=0;
      this.mobileService.bodyGetMobiles.filterRatinglt2=0;
      this.mobileService.bodyGetMobiles.filterRatinggt4=0;

      this.mobileService.bodyGetMobiles.filterPrice30t60=0;
      this.mobileService.bodyGetMobiles.filterPrice60t90=0;
      this.mobileService.bodyGetMobiles.filterPricegt90=0;
      this.mobileService.bodyGetMobiles.filterPricelt30=1;
    }

    if(this.innerfillter=="price 30k to 60k"){
      this.mobileService.bodyGetMobiles.filterRating3t4=0;
      this.mobileService.bodyGetMobiles.filterRatinglt2=0;
      this.mobileService.bodyGetMobiles.filterRatinggt4=0;

      this.mobileService.bodyGetMobiles.filterPrice30t60=1;
      this.mobileService.bodyGetMobiles.filterPrice60t90=0;
      this.mobileService.bodyGetMobiles.filterPricegt90=0;
      this.mobileService.bodyGetMobiles.filterPricelt30=0;
    }
    if(this.innerfillter=="price 60k to 90k"){
      this.mobileService.bodyGetMobiles.filterRating3t4=0;
      this.mobileService.bodyGetMobiles.filterRatinglt2=0;
      this.mobileService.bodyGetMobiles.filterRatinggt4=0;

      this.mobileService.bodyGetMobiles.filterPrice30t60=0;
      this.mobileService.bodyGetMobiles.filterPrice60t90=1;
      this.mobileService.bodyGetMobiles.filterPricegt90=0;
      this.mobileService.bodyGetMobiles.filterPricelt30=0;
    }
    if(this.innerfillter=="price > 90k"){
      this.mobileService.bodyGetMobiles.filterRating3t4=0;
      this.mobileService.bodyGetMobiles.filterRatinglt2=0;
      this.mobileService.bodyGetMobiles.filterRatinggt4=0;

      this.mobileService.bodyGetMobiles.filterPrice30t60=0;
      this.mobileService.bodyGetMobiles.filterPrice60t90=0;
      this.mobileService.bodyGetMobiles.filterPricegt90=1;
      this.mobileService.bodyGetMobiles.filterPricelt30=0;
    }

    this.GetMobiles();
   

  }

  GetMobiles(){
    this.mobileService.GetMobiles()
    .subscribe(data1=>{
     this.Data=data1;
     this.Mobiles=this.Data.data;
      console.log(this.Mobiles);
    },
    (err)=>{
      console.log(err.status);
      
    });
  }

 
}


