import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  IsLogin!:boolean;

  constructor(private router:Router,private account:AccountService) { }

  ngOnInit(): void {
    this.IsLogin=this.account.IsLogin;
  }

  Signuplogin(){
    this.router.navigate(['/signuplogin']);
  }

  SwitchToCategories(){
    this.router.navigate(['/categories']);
}

}
