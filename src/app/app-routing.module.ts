import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { PracticeComponent } from './practice/practice.component';
import { ProductsComponent } from './products/products.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'products', component:ProductsComponent},
  {path:'register', component:RegistrationComponent},
  {path:'addproduct', component:AddproductComponent},
  {path:'practice', component:PracticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
