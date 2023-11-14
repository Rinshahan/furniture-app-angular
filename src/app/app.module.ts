import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { UserService } from './services/user.service';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BedsComponent } from './beds/beds.component';
import { SofasComponent } from './sofas/sofas.component';
import { DiningtablesComponent } from './diningtables/diningtables.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { ProductsService } from './services/products.service';
import { FilterService } from './services/filter.service';
import { FilterPipe } from './pipes/filter.pipe';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    NavbarComponent,
    FooterComponent,
    AllproductsComponent,
    NotfoundComponent,
    BedsComponent,
    SofasComponent,
    DiningtablesComponent,
    FilterPipe,
    ProductdetailComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [UserService, ProductsService, FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
