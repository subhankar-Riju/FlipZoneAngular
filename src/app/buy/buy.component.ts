import { Component, OnInit } from '@angular/core';
import { BuyService } from '../services/buy.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  vari:any;

  constructor(private buyservice:BuyService) { }

  ngOnInit(): void {
    this.vari=this.buyservice.buyFromCategory;
    console.log(this.vari);
    
    
  }

}
