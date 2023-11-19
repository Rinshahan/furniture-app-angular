import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CollapseModule } from 'ngx-bootstrap/collapse'



@NgModule({
  declarations: [
    ProductCardComponent,
    FooterComponent,
    NavbarComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CollapseModule.forRoot()
  ],
  exports: [ProductCardComponent, FooterComponent, NavbarComponent, SidenavComponent, CollapseModule]
})
export class SharedModule { }
