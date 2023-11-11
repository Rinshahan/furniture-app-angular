import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SofasComponent } from './sofas/sofas.component';
import { BedsComponent } from './beds/beds.component';
import { DiningtablesComponent } from './diningtables/diningtables.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CartComponent } from './cart/cart.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'userlogin', component: UserLoginComponent },
  { path: 'usersignup', component: UserRegistrationComponent },
  { path: 'allproducts', component: AllproductsComponent },
  { path: 'sofas/:type', component: SofasComponent },
  { path: 'beds/:type', component: BedsComponent },
  { path: 'dinings/:type', component: DiningtablesComponent },
  { path: 'productview/:id', component: ProductdetailComponent, canActivate: [authGuard] },
  { path: 'cart', component: CartComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
