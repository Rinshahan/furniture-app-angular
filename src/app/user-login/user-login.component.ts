import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  @ViewChild('loginForm') form!: NgForm | undefined

  constructor(private userService: UserService, private router: Router) { }

  // ngOnInit(): void {
  //   const localdata = localStorage.getItem("signUpUsers");
  //   if (localdata != null) {
  //     this.userService.signUpdatas = JSON.parse(localdata)
  //   }
  //   console.log(localdata);
  // }



  onFormSubmitted() {
    if (this.form) {
      console.log(this.form);
      const formvalue = this.form.value
      this.userService.userlogin.push(formvalue)
      this.userService.login();
      this.form.reset();
    }
  }
}
