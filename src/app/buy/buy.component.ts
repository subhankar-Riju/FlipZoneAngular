import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { BuyService } from '../services/buy.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  vari:any;
  grandTotal:number=0;
  FormAddr!:FormGroup;
  buyArray:any[]=[];
  address:any;

  saveinit!:boolean;
  aftersave:boolean=false;

  constructor(private buyservice:BuyService,private account:AccountService) { }

  ngOnInit(): void {
    // this.vari=this.buyservice.buyFromCategory;
    // console.log(this.vari);
    this.buyArray.push(this.buyservice.singleBuy);
    this.buyservice.singleBuy=null;
    console.log(this.buyArray);
    console.log("single buy =");
    console.log( this.buyservice.singleBuy);
    
    
    

    this.FormAddr=new FormGroup({
      "firstname":new FormControl(null,Validators.required),
      "lastname":new FormControl(null,Validators.required),
      "pin":new FormControl(null,Validators.required),
      "address":new FormControl(null,Validators.required),
      "city":new FormControl(null,Validators.required),
      "district":new FormControl(null,Validators.required),
      "email":new FormControl(null,Validators.required),
      "mobile":new FormControl(null,Validators.required),
      "country":new FormControl("India")
    });

    this.FormAddr.get("firstname")?.setValue(this.account.Logged_firstname);
    this.FormAddr.get("lastname")?.setValue(this.account.Logged_lastname);
    this.FormAddr.get("email")?.setValue(this.account.Logged_email);

    //console.log(this.buyservice.singleBuy);
    
    
    
    
    
    for(let m of this.buyArray){
      this.grandTotal+= +(m.price);
    }
    
    // hardcodded the value
    this.buyservice.GetAddress(this.account.Logged_email)
    .subscribe(data=>{
      this.address=data;
      console.log(this.address);
      
      console.log(this.address[0].city);
      this.FormAddr.get("mobile")?.setValue(this.address[0].mobile);
      this.FormAddr.get("city")?.setValue(this.address[0].city);

      this.FormAddr.get("address")?.setValue(this.address[0].addr);

      this.FormAddr.get("pin")?.setValue(this.address[0].pin);

      this.FormAddr.get("district")?.setValue(this.address[0].district);

      if(this.FormAddr.status=="INVALID"){
        this.saveinit=true;
      }
  
      if(this.FormAddr.status=="VALID"){
        this.saveinit=false;
        this.FormAddr.get("mobile")?.disable();
      this.FormAddr.get("city")?.disable();

      this.FormAddr.get("address")?.disable();

      this.FormAddr.get("pin")?.disable();
      this.FormAddr.get("district")?.disable();

      }



    });

    
    
  }

  Edit(){
    console.log(this.FormAddr.status);//INVALID
    this.FormAddr.get("mobile")?.enable();
      this.FormAddr.get("city")?.enable();

      this.FormAddr.get("address")?.enable();

      this.FormAddr.get("pin")?.enable();
      this.FormAddr.get("district")?.enable();
    
  }

  Save(){
   // this.aftersave=true;
   //check form validation
   if(this.FormAddr.status=="VALID"){
    this.saveinit=false;
    this.FormAddr.get("mobile")?.disable();
    this.FormAddr.get("city")?.disable();

    this.FormAddr.get("address")?.disable();

    this.FormAddr.get("pin")?.disable();
    this.FormAddr.get("district")?.disable();
    //next need to make put req for save changes or 
    //need to make post req for new record


   }
   
  }

  PlaceOrder(){
    //this.buyservice.BuyMobile()
    if(this.buyservice.singleBuy==null){

    }this.buyservice.BuyMobile(this.buyArray[0],this.account.Logged_email)
    .subscribe(data=>{
      console.log(data);
      
    })
  }

}
