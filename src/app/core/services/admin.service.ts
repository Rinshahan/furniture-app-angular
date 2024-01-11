import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { user } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../models/admin.model';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminUsers: user[] = []
  constructor(private productService: ProductsService, private http: HttpClient) {

  }

  adminLogin(username: string, password: string) {
    const admin: Admin = { username: username, password: password }
    return this.http.post('http://localhost:9000/api/admin/login', admin)
  }


}
