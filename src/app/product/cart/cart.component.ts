import { Component, OnChanges, OnInit } from '@angular/core';
import { FilterService } from 'src/app/core/services/filter.service';
import { Product } from 'src/app/core/models/products.model';
import { UserService } from 'src/app/core/services/user.service';


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
    this.cartProducts.splice(index, 1)
    this.updateTotalPrice()
  }


  ngOnChanges(): void {
  }
}

