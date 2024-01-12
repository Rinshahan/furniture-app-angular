
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
  images: File
  @ViewChild('productForm') form: NgForm
  addedProducts = []

  constructor(private productService: ProductsService, private toast: ToastrService) { }

  toggleSideBar(): void {
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      this.images = file
    }
  }

  onFormSubmitted() {
    const addedProducts = {
      title: this.form.value.title,
      description: this.form.value.description,
      price: this.form.value.price,
      category: this.form.value.category,
    };

    this.productService.addProduct(addedProducts, this.images).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    })
    this.toast.success("Product Added ")
    this.form.reset()
  }
}
