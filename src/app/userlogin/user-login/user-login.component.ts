import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { user } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user
  @ViewChild('loginForm') form!: NgForm | undefined

  constructor(private userService: UserService, private router: Router, private toast: ToastrService) { }

  // ngOnInit(): void {
  //   const localdata = localStorage.getItem("signUpUsers");
  //   if (localdata != null) {
  //     this.userService.signUpdatas = JSON.parse(localdata)
  //   }
  //   console.log(localdata);
  // }



  onFormSubmitted() {
    let username = this.form.value.username
    let password = this.form.value.password
    this.user = { username, password }
    this.userService.login(this.user).subscribe((res) => {
      this.router.navigate(['allproducts'])
      this.toast.success("Success")
    }, (err) => {
      console.log(err);

    })
    this.form.reset();
  }
}

