import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  Logged_firstname!:string;
  Logged_lastname!:string;
  Logged_email!:string;
  Token!:string;


  constructor(private http:HttpClient) { }

  Signup(body:any){
    return this.http.post('https://localhost:5001/signup',body);
  }

  Login(body:any){
    return this.http.post('https://localhost:5001/login',body);

  }
}
