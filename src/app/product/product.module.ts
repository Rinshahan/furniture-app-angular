import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from "../shared/shared.module";
import { BedsComponent } from './beds/beds.component';
import { DiningtablesComponent } from './diningtables/diningtables.component';
import { SofasComponent } from './sofas/sofas.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: AllproductsComponent },
]

@NgModule({
  declarations: [
    AllproductsComponent,
    BedsComponent,
    DiningtablesComponent,
    SofasComponent,
    ProductdetailComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  // exports: [AllproductsComponent, BedsComponent, DiningtablesComponent, SofasComponent]
})
export class ProductModule { }
