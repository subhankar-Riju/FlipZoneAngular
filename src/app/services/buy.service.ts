import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyService implements OnDestroy{

  buyFromCategory:any;

  constructor() { }
  ngOnDestroy(): void {
    this.buyFromCategory=null;
  }
}
