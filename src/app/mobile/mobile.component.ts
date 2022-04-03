import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuyService } from '../services/buy.service';
import { MobileService } from '../services/mobile.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  Mobiles:any[]=[];
  Data:any;
  // imgUrl='../../../assets/images/';
  // temp_imgUrl={
  //   "Nord2":"../../../assets/images/Nord2.jpg"
  // };
  constructor(private mobileService:MobileService,private buyService:BuyService,
    private router:Router) { }

  ngOnInit(): void {

    this.mobileService.GetMobiles()
    .subscribe(data1=>{
     // this.mobileService.maxCursor=data1.count;
     this.Data=data1;
     this.Mobiles=this.Data.data;
      console.log(this.Mobiles);
      //console.log();

    });
    
}

  Buy(mob:any){
    this.buyService.buyFromCategory=mob;
    this.router.navigate(['/buy']);
  }

}


