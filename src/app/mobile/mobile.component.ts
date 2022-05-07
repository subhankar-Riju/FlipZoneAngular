import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { BuyService } from '../services/buy.service';
import { CartService } from '../services/cart.service';
import { MobileService } from '../services/mobile.service';
import { SingleMobileService } from '../services/single-mobile.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit,AfterViewInit {

  @ViewChild('btn_p_LH') btn_PLTH !:ElementRef;
  @ViewChild('btn_p_HL') btn_PHTL !:ElementRef;
  @ViewChild('btn_r_LH') btn_RLTH !:ElementRef;
  @ViewChild('btn_r_HL') btn_RHTL !:ElementRef;

  ngAfterViewInit(): void {
    this.btn_PLTH.nativeElement.onclick=()=>{
      
      
    }
    console.log(this.btn_PLTH);
    
  }

  n_rating=1;
  n_priceminfilter=0;
  n_pricemaxfilter:number=200000;
  n_price:number[]=[200000,150000,110000,90000,70000,50000,40000,30000,20000,10000];
  upperArray:Array<number>=[200000,150000,110000,90000,70000,50000,40000,30000,20000,10000];
  SortUsed!:string;
  Mobiles:any[]=[];
  Data:any;
  Reset=false;
  searchData!:string;
  filterUsed:string="";
  ratingArray:string[]=["rating < 2","rating > 4","rating 3 To 4"];
  priceArray:string[]=["price < 30k","price 30k to 60k","price 60k to 90k","price > 90k"]
  filterArray!:string[];
  innerfillter:string="";

  maxPage=0;
  

  constructor(public mobileService:MobileService,private buyService:BuyService,
    private cart:CartService,private singlemob:SingleMobileService,
    private router:Router) { }

  ngOnInit(): void {

    //this.btn_PHTL.nativeElement.setAttribute('style', 'background: rgb(100, 142, 248)');

    this.mobileService.count=2;
    this.mobileService.cursor=0;
    
    this.mobileService.GetMobiles()
    .subscribe((data1)=>{
      console.log(data1);
      
     this.Data=data1;
     this.mobileService.maxCursor=this.Data.count;
     this.Mobiles=this.Data.record;
     // console.log(this.Mobiles);
      this.maxPage=Math.ceil(this.mobileService.maxCursor/this.mobileService.count);
      // console.log("max page" + this.maxPage);
      // console.log(this.mobileService.count);
      // console.log(this.mobileService.maxCursor);
      
      
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

  SingleMobile(mob:any){
    this.singlemob.singleMobInit(mob);

    this.router.navigate(['/singleMobile']);
   
   
    
  }

  SearchOn(){
    //this.mobileService.bodyGetMobiles.searchMobile=this.searchData;
    this.mobileService.cursor=0;
    this.mobileService.count=2;
    this.GetMobiles();
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

  
  PrevPage(){
    if(this.mobileService.cursor >0){
      this.mobileService.cursor--;
      this.GetMobiles();
    }

    

  }

  NextPage(){
    if(this.maxPage-2 != this.mobileService.cursor-1){
      this.mobileService.cursor++;
      this.GetMobiles();
    }
   // this.GetMobiles();
  }

  GetMobiles(){
    this.mobileService.GetMobiles()
    .subscribe(data1=>{
      console.log(data1);
      
      this.Data=data1;
      this.mobileService.maxCursor=this.Data.count;
      this.Mobiles=this.Data.record;
      // console.log(this.Mobiles);
       this.maxPage=Math.ceil(this.mobileService.maxCursor/this.mobileService.count);
    },
    (err)=>{
      console.log(err.status);
      
    });
  }

  SortChange(event:Event){

  }

  //////////////////////---------start change----------------

  Rating_radio(event:Event){
    console.log(this.n_rating);
    if(this.n_rating==1){
      this.mobileService.bodyGetMobiles.filterRatinggt1=1;
      this.mobileService.bodyGetMobiles.filterRatinggt2=0;
      this.mobileService.bodyGetMobiles.filterRatinggt3=0;
      this.mobileService.bodyGetMobiles.filterRatinggt4=0;
    }
    if(this.n_rating==2){
      this.mobileService.bodyGetMobiles.filterRatinggt1=0;
      this.mobileService.bodyGetMobiles.filterRatinggt2=1;
      this.mobileService.bodyGetMobiles.filterRatinggt3=0;
      this.mobileService.bodyGetMobiles.filterRatinggt4=0;
    }
    if(this.n_rating==3){
      this.mobileService.bodyGetMobiles.filterRatinggt1=0;
      this.mobileService.bodyGetMobiles.filterRatinggt2=0;
      this.mobileService.bodyGetMobiles.filterRatinggt3=1;
      this.mobileService.bodyGetMobiles.filterRatinggt4=0;
    }
    if(this.n_rating==4){
      this.mobileService.bodyGetMobiles.filterRatinggt1=0;
      this.mobileService.bodyGetMobiles.filterRatinggt2=0;
      this.mobileService.bodyGetMobiles.filterRatinggt3=0;
      this.mobileService.bodyGetMobiles.filterRatinggt4=1;
    }
    this.mobileService.cursor=0;
    
    this.GetMobiles();
  }

  Price_select(event:Event){
      console.log(this.n_priceminfilter);
      
      this.upperArray=[];
        for(let i of this.n_price){
            if(i > this.n_priceminfilter){
              this.upperArray.push(i);
            }
        }
        this.n_pricemaxfilter=this.upperArray[0];
        //console.log(this.upperArray);
        

        this.mobileService.bodyGetMobiles.filterminPrice=this.n_priceminfilter;
        console.log("max "+ this.mobileService.bodyGetMobiles.filtermaxPrice);
        console.log("min "+ this.mobileService.bodyGetMobiles.filterminPrice);
        
        this.GetMobiles();
        
        
  }

  Price_select2(event:Event){
    this.mobileService.bodyGetMobiles.filtermaxPrice=this.n_pricemaxfilter;
    console.log("max "+ this.mobileService.bodyGetMobiles.filtermaxPrice);

    this.GetMobiles();
  }

  click_PLTH(){
    this.btn_PLTH.nativeElement.setAttribute('style', 'background: rgb(100, 142, 248);border-radius: 40px');
    this.btn_PHTL.nativeElement.setAttribute('style', 'background: transparent');
    this.btn_RHTL.nativeElement.setAttribute('style', 'background: transparent');
    this.btn_RLTH.nativeElement.setAttribute('style', 'background: transparent');

    this.mobileService.bodyGetMobiles.sortByPrice=1;
    this.mobileService.bodyGetMobiles.sortByRating=0;
    this.mobileService.cursor=0;
    this.GetMobiles();
    
  }

  click_PHTL(){
    this.btn_PHTL.nativeElement.setAttribute('style', 'background: rgb(100, 142, 248);border-radius: 40px');
    this.btn_PLTH.nativeElement.setAttribute('style', 'background: transparent');
    this.btn_RHTL.nativeElement.setAttribute('style', 'background: transparent');
    this.btn_RLTH.nativeElement.setAttribute('style', 'background: transparent');

    this.mobileService.bodyGetMobiles.sortByPrice=-1;
    this.mobileService.bodyGetMobiles.sortByRating=0;
    this.mobileService.cursor=0;
    this.GetMobiles();

  }

  click_RHTL(){
    this.btn_RHTL.nativeElement.setAttribute('style', 'background: rgb(100, 142, 248);border-radius: 40px');
    this.btn_PLTH.nativeElement.setAttribute('style', 'background: transparent');
    this.btn_RLTH.nativeElement.setAttribute('style', 'background: transparent');
    this.btn_PHTL.nativeElement.setAttribute('style', 'background: transparent');

    this.mobileService.bodyGetMobiles.sortByPrice=0;
    this.mobileService.bodyGetMobiles.sortByRating=-1;
    this.mobileService.cursor=0;
    this.GetMobiles();
  }

  click_RLTH(){
    this.btn_PHTL.nativeElement.setAttribute('style', 'background: transparent');
    this.btn_PLTH.nativeElement.setAttribute('style', 'background: transparent');
    this.btn_RHTL.nativeElement.setAttribute('style', 'background: transparent');
    this.btn_RLTH.nativeElement.setAttribute('style', 'background: rgb(100, 142, 248);border-radius: 40px');

    this.mobileService.bodyGetMobiles.sortByPrice=0;
    this.mobileService.bodyGetMobiles.sortByRating=1;
    this.mobileService.cursor=0;
    this.GetMobiles();
  }
 
}


