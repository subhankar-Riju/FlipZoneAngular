import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { AccountService } from './services/account.service';
import { SignuploginComponent } from './signuplogin/signuplogin.component';
import { HttpClientModule } from '@angular/common/http';
import { MobileComponent } from './mobile/mobile.component';
import { MobileService } from './services/mobile.service';
import { CartComponent } from './cart/cart.component';
import { BuyComponent } from './buy/buy.component';
import { HistoryComponent } from './history/history.component';
import { CartService } from './services/cart.service';
import { BuyService } from './services/buy.service';
import { HistoryService } from './services/history.service';
import { SingleMobileService } from './services/single-mobile.service';
import { SingleMobileComponent } from './single-mobile/single-mobile.component';




@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HomeComponent,
    SignuploginComponent,
    MobileComponent,
    CartComponent,
    BuyComponent,
    HistoryComponent,
    SingleMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AccountService,MobileService,CartService,BuyService,HistoryService,SingleMobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
