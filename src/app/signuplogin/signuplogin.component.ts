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

  constructor(private account:AccountService) { }

  submitForm(){
    if(this.Islogin){
      //

    }
    else{
      //signup
      const body={
        firstname:this.Form.get('firstname')?.value,
        lastname:this.Form.get('lastname')?.value,
        email:this.Form.get('email')?.value,
        password:this.Form.get('password')?.value
      };

      this.account.Signup(body).subscribe(data=>{
        console.log(data);
        
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
