import { Component, OnInit } from '@angular/core';
import { MobileService } from '../services/mobile.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor(private mobileService:MobileService) { }

  ngOnInit(): void {

    this.mobileService.GetMobiles()
    .subscribe(data=>{
      //this.mobileService.maxCursor=data['count'];
      console.log(data);
      
    })

  }

}
