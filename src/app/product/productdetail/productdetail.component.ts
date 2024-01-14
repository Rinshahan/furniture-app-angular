import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/products.model';
import { UserService } from 'src/app/core/services/user.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private productService: ProductsService, private toast: ToastrService) { }
  product: Product
  productId: string;
  userId: string
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userId = this.userService.userId
    this.productService.getProductById(this.productId).subscribe((products) => {
      this.product = products.data.productById
    }, (err) => {
      console.log(err);
      this.toast.info(err.error.message)
    })
    this.userService.showSearchBox = false
    this.userService.showCart = true
  }

  addToCart() {
    this.productService.addProductToCart(this.userId, this.productId).subscribe((res) => {
      console.log(res);
      this.toast.success("Product Added to Cart")
    }, (err) => {
      console.log(err)
      this.toast.error(err.error.message, "Product Error")
    })
  }

}

