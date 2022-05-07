import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SingleMobileService } from '../services/single-mobile.service';

@Component({
  selector: 'app-single-mobile',
  templateUrl: './single-mobile.component.html',
  styleUrls: ['./single-mobile.component.css']
})
export class SingleMobileComponent implements OnInit {
  mob:any;
  constructor(private singlemob:SingleMobileService,private route:Router) { }

  ngOnInit(): void {
   this.mob=this.singlemob.singleMob;
    
    
  }

}
