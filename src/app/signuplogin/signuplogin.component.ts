import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-signuplogin',
  templateUrl: './signuplogin.component.html',
  styleUrls: ['./signuplogin.component.css']
})
export class SignuploginComponent implements OnInit {

  Form!:FormGroup;
  Islogin=false;
  name!:string;
  Data:[]=[];
  Login!:any;
  constructor(private account:AccountService) { }

  submitForm(){
    if(this.Islogin){
      //login
      const body={
       // firstname:this.Form.get('firstname')?.value,
        //lastname:this.Form.get('lastname')?.value,
        email:this.Form.get('email')?.value,
        password:this.Form.get('password')?.value
      };

      this.account.Login(body).subscribe(data1=>{
        console.log(data1);
        this.Login=data1;
        this.Data=this.Login.data;
        for(let x of this.Data){
          this.account.Logged_firstname=x['firstname'];
          this.account.Logged_lastname=x["lastname"];
          this.account.Logged_email=x["email"]          
        }
        // console.log(this.account.Logged_email);
        // console.log( this.account.Logged_lastname);
        // console.log( this.account.Logged_firstname);
        
        });

    }
    else{
      //signup
      const body={
        firstname:this.Form.get('firstname')?.value,
        lastname:this.Form.get('lastname')?.value,
        email:this.Form.get('email')?.value,
        password:this.Form.get('password')?.value
      };

      this.account.Signup(body).subscribe(data1=>{
        console.log(data1);
        //console.log(data1["data"]);
      });

    

    }
  }

  Switch_btn_fun(){
    if(this.Islogin){
      this.Islogin=false;
    }
    else{
      this.Islogin=true;
    }
  }

  ngOnInit(): void {
    this.Form=new FormGroup({
      'firstname':new FormControl(null,Validators.required),
      'lastname':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required,Validators.minLength(5)]),
      'c_password':new FormControl(null,[Validators.required,Validators.minLength(5)])
      


    });

  }

  

}
