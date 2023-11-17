import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  @ViewChild('loginForm') form!: NgForm | undefined

  constructor(private adminService: AdminService, private router: Router) { }




  onFormSubmitted() {
    if (this.form) {
      console.log(this.form);
      const formvalue = this.form.value
      let username: string = this.form.value.username
      let password: string = this.form.value.password
      this.form.reset();
    }
  }
}
