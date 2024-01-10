import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../models/user.model';
import { userlogin } from '../models/userlogin.model';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  showSearchBox: boolean = true
  showCart: boolean = true
  constructor(private router: Router, private toaster: ToastrService, private http: HttpClient) {

  }
  user: user[] = []
  userlogin: userlogin[] = []
  isLogged: boolean = false
  userId: string
  signUp(userData: user) {
    return this.http.post('http://localhost:9000/api/users/register', userData)

  }

  login(userData) {
    return this.http.post('http://localhost:9000/api/users/login', userData)

  }



}

