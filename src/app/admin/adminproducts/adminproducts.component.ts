import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/products.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-adminproducts',
  templateUrl: './adminproducts.component.html',
  styleUrls: ['./adminproducts.component.css']
})
export class AdminproductsComponent implements OnInit {
  isSideBarCollapsed: boolean = false
  adminProducts: Product[]
  constructor(private productService: ProductsService) { }
  ngOnInit(): void {
    this.adminProducts = this.productService.allproducts
  }
  toggleSideBar(): void {
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
  }
}
