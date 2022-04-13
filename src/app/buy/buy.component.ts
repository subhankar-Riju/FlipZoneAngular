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

  FormAddr!:FormGroup;

  constructor(private buyservice:BuyService,private account:AccountService) { }

  ngOnInit(): void {
    this.vari=this.buyservice.buyFromCategory;
    console.log(this.vari);

    this.FormAddr=new FormGroup({
      "firstname":new FormControl(null,Validators.required),
      "lastname":new FormControl(null,Validators.required),
      "pin":new FormControl(null,Validators.required),
      "address":new FormControl(null,Validators.required),
      "city":new FormControl(null,Validators.required),
      "district":new FormControl(null,Validators.required),
      "email":new FormControl(null,Validators.required),
      "mobile":new FormControl(null,Validators.required),
    });

    this.FormAddr.get("firstname")?.setValue(this.account.Logged_firstname);
    this.FormAddr.get("firstname")?.setValue(this.account.Logged_lastname);
    this.FormAddr.get("firstname")?.setValue(this.account.Logged_email);

    
    
  }

}
