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


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HomeComponent,
    SignuploginComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AccountService,MobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
