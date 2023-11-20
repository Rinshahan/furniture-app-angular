import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../models/user.model';
import { userlogin } from '../models/userlogin.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  showSearchBox: boolean = true
  showCart: boolean = true
  constructor(private router: Router, private toaster: ToastrService) {
    const localdata = localStorage.getItem('signUpUsers');
    if (localdata != null) {
      this.user = JSON.parse(localdata);
    }
  }
  //signUpdatas: user[] = []
  logindatas: object[] = []
  user: user[] = []
  userlogin: userlogin[] = []
  isLogged: boolean = false
  signUp() {
    // for (const user of this.user) {
    //   const username = user.user
    //   console.log(username);
    //   if (this.user.some(x => x.username === username)) {
    //     alert("the username is already exist")
    //   } else {
    localStorage.setItem('signUpUsers', JSON.stringify(this.user))
    this.router.navigate(['userlogin'])
    this.toaster.success("User Registered Successfully")
    //     this.router.navigate(['userlogin']);
    //     alert('User SignedUp Successfully');
    //   }
    // }
  }

  login(username: string, password: string) {
    this.logindatas.push(this.userlogin)

    let findUser = this.user.filter(x => { return x.username === username && x.password === password })

    // const userExist = this.user.find(x => x.username === username && x.password === password)
    if (findUser.length === 0) {
      this.toaster.error("Check Your Login Credentials")
    } else {
      this.router.navigate(['allproducts'])
      this.toaster.success("Login Success")
      this.isLogged = true
    }
  }



}

