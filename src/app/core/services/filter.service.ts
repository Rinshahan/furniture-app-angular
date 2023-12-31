import { Injectable } from '@angular/core';
import { Product } from 'src/app/core/models/products.model';
import { ProductsService } from './products.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  disable: boolean = false
  filteredProducts = []
  viewedProduct = []
  toCartProducts = []
  constructor(private productService: ProductsService, private toast: ToastrService) { }

  filteringBeds(type: string) {
    const findProducts = this.productService.allproducts.filter(x => { return x.type === type })
    this.filteredProducts = findProducts;
  }

  viewProducts(id: number) {
    let view = this.productService.allproducts.filter(x => { return x.productid === id })
    this.viewedProduct = view
  }
  goToCart(id: number) {
    const cartProduct = this.productService.allproducts.filter(x => x.productid === id)
    const productInCart = this.toCartProducts.find(x => x.productid === id)
    if (!productInCart) {
      this.toCartProducts.push(cartProduct[0])
      this.toast.success("Product Added")
    } else {
      this.toast.warning("Product Already exist")
    }
  }
}

