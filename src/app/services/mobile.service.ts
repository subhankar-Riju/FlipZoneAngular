import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileService implements OnInit{

  count=10;
  cursor=0;
  maxCursor=0;

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
  }

  GetMobiles(){
    return this.http.get("https://localhost:5001/api/Mobile/GetMobiles/"+this.count+"/"+this.cursor);
  }

}
