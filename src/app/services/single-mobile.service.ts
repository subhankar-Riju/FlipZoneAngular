import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleMobileService {
  singleMob:any;

  constructor() { }
  
  singleMobInit(mob:any){
    this.singleMob=mob;
  }
}
