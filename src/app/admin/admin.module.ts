import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';



@NgModule({
  declarations: [
    AdminloginComponent,
    AdminregistrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
