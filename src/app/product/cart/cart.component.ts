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
    this.productService.getCart(this.userId).subscribe((res: ApiResponse) => {
      const productIds = res.data.getCart.product;
      this.fetchProductDetails(productIds)
      this.totalPrice = res.data.totalPrice
    }, (err) => {
      console.log(err);
      this.toast.error(err.error.message)
    })

  }

  fetchProductDetails(productIds: string[]): void {
    //use forkjoin to fetch details for all products concurrently
    const productRequests = productIds.map(productId => this.productService.getProductById(productId))
    forkJoin(productRequests).subscribe((products: Product[]) => {
      this.cartProducts = products.map(product => product.data.productById)
      console.log(this.cartProducts);
    }, (err) => {
      console.log(err);
    })
  }

  updateTotalPrice() {

  }

  deleteProduct(productId) {
    const indexToDelete: number = this.cartProducts.findIndex((product) => product._id === productId)
    this.productService.deleteProductCart(this.userId, productId)
      .subscribe((res) => {
        this.toast.success("Product Deleted")
        if (indexToDelete !== -1) {
          this.totalPrice -= (this.cartProducts[indexToDelete].price as unknown as number)
          this.cartProducts.splice(indexToDelete, 1)
        }
      }, (err) => {
        console.log(err);
        this.toast.error(err.error.message)
      })

  }


  ngOnChanges(): void {
  }
}

