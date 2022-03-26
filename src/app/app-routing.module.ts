import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { MobileComponent } from './mobile/mobile.component';
import { SignuploginComponent } from './signuplogin/signuplogin.component';

const routes: Routes = [
  {path:'categories',component:CategoriesComponent},
  {path:'',component:HomeComponent},
  {path:'signuplogin',component:SignuploginComponent},
  {path:'mobiles',component:MobileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
