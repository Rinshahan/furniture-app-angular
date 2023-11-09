import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { products } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filteredProducts: products[] = []
  viewedProduct: products[] = []
  constructor(private productService: ProductsService) { }

  filteringBeds(type: string) {
    const findProducts = this.productService.allproducts.filter(x => { return x.type === type })
    this.filteredProducts = findProducts;
  }

  viewProducts(id: number) {
    let view = this.productService.allproducts.filter(x => { return x.productid === id })
    this.viewedProduct = view
  }
}
