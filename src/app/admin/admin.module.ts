import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';

const routes: Routes = [
  { path: "", component: AdminloginComponent }
]

@NgModule({
  declarations: [
    AdminloginComponent,
    AdminhomeComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
