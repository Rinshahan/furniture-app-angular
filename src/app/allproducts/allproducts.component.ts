import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { products } from '../models/products.model';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  productService: ProductsService = inject(ProductsService);

  allProducts: products[]

  ngOnInit(): void {
    this.allProducts = this.productService.allproducts
    console.log(this.allProducts);

  }
}
