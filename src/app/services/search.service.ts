import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchData: string;
  searchProduct: Product[] = []
  constructor(private productService: ProductsService) { }

  // search() {
  //   this.searchProduct = this.productService.allproducts.filter(x => { return x.productname == this.searchData })
  //   console.log(this.searchProduct);
  // }
}
