import { Component, OnChanges, OnInit } from '@angular/core';
import { FilterService } from 'src/app/core/services/filter.service';
import { Product } from 'src/app/core/models/products.model';
import { UserService } from 'src/app/core/services/user.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/core/services/products.service';
import Cart from 'src/app/core/models/cart.model';
import { ApiResponse } from 'src/app/core/models/api.model';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges {
  totalPrice = 0;
  totalQuantity = 0
  cartProducts: Product[] = [];
  userId: string

  constructor(private userService: UserService, private toast: ToastrService, private productService: ProductsService) {
  }
  ngOnInit(): void {
    this.userService.showSearchBox = false;
    this.userService.showCart = false
    this.userId = this.userService.userId
    console.log(this.userId);
    this.productService.getCart(this.userId).subscribe((res: ApiResponse) => {
      const productIds = res.data.getCart.product;
      this.fetchProductDetails(productIds)
      this.totalPrice = res.data.totalPrice
    }, (err) => {
      console.log(err);
    })


  }

  fetchProductDetails(productIds: string[]): void {
    //use forkjoin to fetch details for all products concurrently
    const productRequests = productIds.map(productId => this.productService.getProductById(productId))
    forkJoin(productRequests).subscribe((products: Product[]) => {
      this.cartProducts = products
      console.log(this.cartProducts);
    }, (err) => {
      console.log(err);
    })
  }

  updateTotalPrice() {

  }

  deleteProduct(productId) {
    console.log(productId);
    this.productService.deleteProductCart(this.userId, productId)
    // .subscribe((res) => {
    //   console.log(res);
    //   this.toast.success("Product Deleted")
    // }, (err) => {
    //   console.log(err);
    //   this.toast.error("Something went Wrong")
    // })
  }


  ngOnChanges(): void {
  }
}

