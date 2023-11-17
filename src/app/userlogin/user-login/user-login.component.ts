import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

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
      let username: string = this.form.value.username
      let password: string = this.form.value.password
      this.userService.userlogin.push(formvalue)
      this.userService.login(username, password);
      this.form.reset();
    }
  }
}

