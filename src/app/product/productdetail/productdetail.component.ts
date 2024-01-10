import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from 'src/app/core/services/filter.service';
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
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private filterService: FilterService, private productService: ProductsService, private toast: ToastrService) { }
  product: Product
  id: string;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.productService.getProductById(this.id).subscribe((products) => {
      this.product = products.data.productById
      console.log(this.product);
    }, (err) => {
      console.log(err);
      this.toast.info(err.message)
    })
    this.filterService.viewProducts(parseInt(this.id))
    //this.product = this.filterService.viewedProduct;
    this.userService.showSearchBox = false
    this.userService.showCart = true
  }

  addToCart() {
    this.filterService.goToCart(parseInt(this.id))

  }

}

