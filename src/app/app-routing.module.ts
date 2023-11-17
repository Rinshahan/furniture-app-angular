import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './core/home-page/home-page.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { BedsComponent } from './product/beds/beds.component';
import { DiningtablesComponent } from './product/diningtables/diningtables.component';
import { SofasComponent } from './product/sofas/sofas.component';
import { ProductdetailComponent } from './product/productdetail/productdetail.component';
import { CartComponent } from './product/cart/cart.component';
import { authGuard } from './core/guards/auth.guard';
import { UserLoginComponent } from './userlogin/user-login/user-login.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'usersignup', loadChildren: () => import('./userlogin/user.module').then(m => m.UserModule) },
  { path: 'userlogin', component: UserLoginComponent },
  { path: 'allproducts', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'sofas/:type', component: SofasComponent },
  { path: 'beds/:type', component: BedsComponent },
  { path: 'dinings/:type', component: DiningtablesComponent },
  { path: 'productview/:id', component: ProductdetailComponent, canActivate: [authGuard] },
  { path: 'adminregistration', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'cart', component: CartComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
