import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [ProductCardComponent]
})
export class SharedModule { }
