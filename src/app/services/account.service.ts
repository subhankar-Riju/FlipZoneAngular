import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  Signup(body:any){
    
    return this.http.post('https://localhost:5001/signup',body);

  }
}
