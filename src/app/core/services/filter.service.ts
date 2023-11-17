import { Injectable } from '@angular/core';
import { Product } from 'src/app/core/models/products.model';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  disable: boolean = false
  filteredProducts: Product[] = []
  viewedProduct: Product[] = []
  toCartProducts: Product[] = []
  constructor(private productService: ProductsService) { }

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
      alert("Product Added")
    } else {
      alert("Product Already exist")
    }
  }
}

