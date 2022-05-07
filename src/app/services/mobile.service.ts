import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class MobileService implements OnInit{

  count=10;
  cursor=0;
  maxCursor=0;
  bodyGetMobiles={
        searchMobile:'',
        filterRatinggt4:0, 
        filterRatinggt3:0, 
        filterRatinggt2:0, 
        filterRatinggt1:0, 

        filtermaxPrice:200000,
        filterminPrice:0, 
        sortByPrice :-1,
        sortByRating:0, 
  }

  constructor(private http:HttpClient,
    private account:AccountService) { }
  ngOnInit(): void {
  }
  createAuthorizationHeader(bearerToken: string): HttpHeaders {
    const headerDict = {
      Authorization: 'Bearer ' + bearerToken,
    }
    return new HttpHeaders(headerDict);
  }

  GetMobiles(){
    const header = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.account.Token}`
    });
    return this.http.
    post("https://localhost:5001/api/Mobile/GetMobiles/"+this.count+"/"+this.cursor, this.bodyGetMobiles,{
      headers:this.createAuthorizationHeader(this.account.Token)
    } );
    
  }

}
