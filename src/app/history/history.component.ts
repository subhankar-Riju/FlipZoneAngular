import { Component, OnInit } from '@angular/core';
import { BuyService } from '../services/buy.service';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  vari:any;
  histArray:any[]=[];

  constructor(private hist:HistoryService) { }

  maxPage=0;
  ngOnInit(): void {
   
    this.BuyHistory();
  }

  PrevPage(){
    if(this.hist.cursor >0){
      this.hist.cursor--;
      this.BuyHistory();
    }

  }

  NextPage(){
    if(this.maxPage-2 != this.hist.cursor-1){
      this.hist.cursor++;
      this.BuyHistory();
    }
  }

  BuyHistory(){
    this.hist.BuyHistory()
    .subscribe(data=>{
      console.log(data);
      this.vari=data;
      this.histArray=this.vari.data;

      this.hist.maxCursor=this.vari.count;

       this.maxPage=Math.ceil(this.hist.maxCursor/this.hist.count);


      
    });
  }

}
