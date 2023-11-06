import { Injectable, OnInit } from '@angular/core';
import { user } from '../models/user.model';
import { JsonPipe } from '@angular/common';
import { userlogin } from '../models/userlogin.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private router: Router) {
    const localdata = localStorage.getItem('signUpUsers');
    if (localdata != null) {
      this.user = JSON.parse(localdata);
    }
  }
  //signUpdatas: user[] = []
  logindatas: object[] = []
  user: user[] = []
  userlogin: userlogin[] = []
  signUp() {
    const username = this.user[0].username
    console.log(username);
    if (this.user.length > 0 && this.user.some((x) => x.username)) {
      alert("the username is already exist")
    } else {
      localStorage.setItem('signUpUsers', JSON.stringify(this.user))
      this.router.navigate(['userlogin']);
      alert('User SignedUp Successfully');
    }
  }

  login() {
    this.logindatas.push(this.userlogin)
    console.log(this.user);
    const username = this.userlogin[0].username
    const password = this.userlogin[0].password
    console.log(username);
    console.log(password);

    const userExist = this.user.find(x => x.username === username && x.password === password)
    if (userExist != undefined) {
      alert('User Login Successfully')
    } else {
      alert('mission failed')
    }
  }
}
