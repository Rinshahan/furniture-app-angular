import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { SharedModule } from '../shared/shared.module';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { AdminproductsComponent } from './adminproducts/adminproducts.component';

const routes: Routes = [
  { path: "", component: AdminloginComponent },

]

@NgModule({
  declarations: [
    AdminloginComponent,
    AdminhomeComponent,
    AdminusersComponent,
    AdminproductsComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
