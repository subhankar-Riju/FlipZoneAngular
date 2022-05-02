import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  cursor=0;
  count=4;
  maxCursor=0;

  constructor(private http:HttpClient,private account:AccountService) { }

  BuyHistory(){
    
    return this.http.get("https://localhost:5001/History/"+ this.account.Logged_email+"/"+this.count+"/"+this.cursor);
  }
}
