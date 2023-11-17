import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products.service';
import { FilterService } from './services/filter.service';
import { UserService } from './services/user.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: '**', component: NotfoundComponent }
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
  providers: [ProductsService, FilterService, UserService]
})
export class CoreModule { }
