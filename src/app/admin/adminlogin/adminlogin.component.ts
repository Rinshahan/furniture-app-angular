import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  @ViewChild('loginForm') form!: NgForm | undefined

  constructor(private adminService: AdminService, private router: Router, private toast: ToastrService) { }




  onFormSubmitted() {
    if (this.form) {
      console.log(this.form);
      const formvalue = this.form.value
      let username: string = this.form.value.username
      let password: number = this.form.value.password
      if (username == 'admin' && password == 123) {
        this.router.navigate(['/adminhome'])
        this.toast.success("Admin Login Success")
      } else {
        this.toast.error("Please Check Your Login Credentials")
      }
      this.form.reset();
    }
  }
}
