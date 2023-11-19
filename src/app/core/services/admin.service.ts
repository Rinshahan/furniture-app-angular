import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminUsers: user[] = []
  constructor(private productService: ProductsService) {
    const localdata = localStorage.getItem('signUpUsers')
    if (localdata != null) {
      this.adminUsers = JSON.parse(localdata)
    }
  }



}
