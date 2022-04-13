import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FlipZone';
  name:any;
  Islogin:any;

  LoginOrout(){
      if(this.account.IsLogin){
          console.log("login");
          
      }
      else{
        this.router.navigate(['/signuplogin']);
      }
  }

  constructor(private router:Router,private account:AccountService){}
  ngOnInit(): void {
    this.name=this.account.Logged_firstname;
    this.Islogin=this.account.IsLogin;

    this.account.Loginstatus_parent.subscribe(data=>{
      this.Islogin=data;
    });
  }

  
}
