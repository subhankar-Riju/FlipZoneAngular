import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { MobileComponent } from './mobile/mobile.component';
import { SignuploginComponent } from './signuplogin/signuplogin.component';

const routes: Routes = [
  {path:'categories',component:CategoriesComponent},
  {path:'',component:HomeComponent},
  {path:'signuplogin',component:SignuploginComponent},
  {path:'mobiles',component:MobileComponent},
  {path:'cart',component:CartComponent},
  {path:'buy',component:BuyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
