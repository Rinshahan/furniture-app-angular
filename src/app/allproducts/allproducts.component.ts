import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { products } from '../models/products.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  productService: ProductsService = inject(ProductsService);
  constructor(private userService: UserService) { }
  allProducts: products[]

  ngOnInit(): void {
    this.allProducts = this.productService.allproducts
    this.userService.showSearchBox = true
    this.userService.showCart = true
  }
}
