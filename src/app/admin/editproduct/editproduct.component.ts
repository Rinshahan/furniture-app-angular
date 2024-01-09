import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/products.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  isSideBarCollapsed: boolean = false
  @ViewChild('productForm') form: NgForm
  productId: string
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService, private router: Router) { }
  product: Product
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id')
    this.productService.getProductById(this.productId).subscribe((res) => {
      this.product = res.data.productById
    })
  }

  saveChanges(): void {
    this.product = this.form.value
    this.productService.updateProduct(this.productId, this.product).subscribe((updatedProduct) => {
      console.log(updatedProduct);
    }, (err) => {
      console.log(err);
    })
    this.router.navigate(['/adminproducts'])

  }


  toggleSideBar(): void {
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
  }
}
