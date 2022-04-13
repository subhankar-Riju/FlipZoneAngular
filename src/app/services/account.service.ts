import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  Logged_firstname!:string;
  Logged_lastname!:string;
  Logged_email!:string;
  Token!:string;
  IsLogin=false;

  Loginstatus_parent=new EventEmitter<boolean>();


  constructor(private http:HttpClient) { }

  Signup(body:any){
    return this.http.post('https://localhost:5001/signup',body);
  }

  Login(body:any){
    return this.http.post('https://localhost:5001/login',body);

  }
}
