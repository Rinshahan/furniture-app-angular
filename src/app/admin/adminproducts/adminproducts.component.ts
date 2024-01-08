import { Component, OnInit } from '@angular/core';
import { Cloudinary } from '@cloudinary/url-gen';
import { Product } from 'src/app/core/models/products.model';
import { AdminService } from 'src/app/core/services/admin.service';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-adminproducts',
  templateUrl: './adminproducts.component.html',
  styleUrls: ['./adminproducts.component.css']
})
export class AdminproductsComponent implements OnInit {
  isSideBarCollapsed: boolean = false
  adminProducts: Product[] = []
  selectedProduct: Product
  constructor(private productService: ProductsService, adminService: AdminService) { }
  ngOnInit() {

    this.productService.getAllProduct().subscribe((products) => {
      this.adminProducts = products.data.allProducts
    })
  }
  toggleSideBar(): void {
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
  }

  deleteProduct(product: Product) {
    //this.productService.deleteProduct(product.productid)
  }


}
