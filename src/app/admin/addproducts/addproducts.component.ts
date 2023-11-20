import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/core/models/products.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent {

  isSideBarCollapsed: boolean = false

  @ViewChild('productForm') form: NgForm
  addedProducts: Product[] = []

  constructor(private productService: ProductsService, private toast: ToastrService) { }

  toggleSideBar(): void {
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
  }

  onFormSubmitted() {
    const addedProducts: Product = this.form.value
    console.log(addedProducts);
    this.productService.allproducts.push(addedProducts)
    this.toast.success("Product Added ")
    this.form.reset()
  }
}
