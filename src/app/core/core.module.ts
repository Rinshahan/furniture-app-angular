import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products.service';
import { FilterService } from './services/filter.service';
import { UserService } from './services/user.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token-interceptor.interceptor';



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: '**', component: NotfoundComponent }
]

const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
]

@NgModule({
  declarations: [
    HomePageComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [ProductsService, FilterService, UserService, httpInterceptorProviders]
})
export class CoreModule { }
