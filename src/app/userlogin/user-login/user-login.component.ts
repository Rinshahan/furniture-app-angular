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
  userId: string
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
    let username: string = this.form.value.username
    let password: string = this.form.value.password
    this.user = { username, password }
    this.userService.login(this.user).subscribe((res) => {
      const userId: string = (res as { user: user }).user._id
      this.userId = userId
      this.userService.userId = this.userId
      const token = (res as { token: string }).token
      localStorage.setItem('token', token)
      this.router.navigate(['allproducts'])
      this.toast.success("Success")
      this.userService.isLogged = true
    }, (err) => {
      console.log(err);
      this.toast.info(err.message)
    })
    this.form.reset();
  }
}

