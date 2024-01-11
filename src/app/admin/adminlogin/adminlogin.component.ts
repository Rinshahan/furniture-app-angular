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
      let username: string = this.form.value.username
      let password: string = this.form.value.password
      this.adminService.adminLogin(username, password).subscribe((res) => {
        const token = (res as { token: string }).token
        localStorage.setItem('adminToken', token)
        this.router.navigate(['/adminhome'])
        this.toast.success("Admin Login Success")
      }, (err) => {
        this.toast.error(err.error.message)
      })
      this.form.reset();
    }
  }
}
