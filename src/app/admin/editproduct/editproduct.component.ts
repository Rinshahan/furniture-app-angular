import { Component, OnInit } from '@angular/core';
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
  productId: number
  product: Product
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.productId = +this.activatedRoute.snapshot.paramMap.get('id')
    this.product = this.productService.allproducts.find(product => product.productid === this.productId)
    console.log(this.productId);

  }

  saveChanges(): void {
    this.productService.updateProduct(this.productId, this.product)
    this.router.navigate(['/adminproducts'])

  }


  toggleSideBar(): void {
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
  }
}
