import { Component, OnInit } from '@angular/core';
import { BuyService } from '../services/buy.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  vari:any;
  histArray:any[]=[];

  constructor(private buy:BuyService) { }

  ngOnInit(): void {
    this.buy.BuyHistory()
    .subscribe(data=>{
      console.log(data);
      this.vari=data;
      this.histArray=this.vari.data;


      
    });
  }

}
