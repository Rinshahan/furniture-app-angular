import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from '../services/user.service';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/products.model';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges {
  totalPrice = 0;
  totalQuantity = 0
  cartProducts: Product[] = []
  constructor(private userService: UserService, private filterService: FilterService) {
  }
  ngOnInit(): void {
    this.userService.showSearchBox = false;
    this.userService.showCart = false
    this.cartProducts = this.filterService.toCartProducts
    this.updateTotalPrice()
    console.log(this.cartProducts);
    console.log(this.totalPrice);
    console.log(this.totalPrice);
  }
  updateTotalPrice() {
    this.totalPrice = 0;
    this.totalQuantity = 0;
    for (let product of this.cartProducts) {
      this.totalQuantity += product.quantity
      this.totalPrice += product.quantity * product.productprice
    }
  }

  deleteProduct(product) {
    const index = this.cartProducts.indexOf(product)
    console.log(index);
    this.cartProducts.splice(index, 1)
    this.updateTotalPrice()
  }


  ngOnChanges(): void {
  }
}
