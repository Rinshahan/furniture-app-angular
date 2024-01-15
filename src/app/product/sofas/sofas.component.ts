import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/core/models/products.model';
import { ProductsService } from 'src/app/core/services/products.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-sofas',
  templateUrl: './sofas.component.html',
  styleUrls: ['./sofas.component.css']
})
export class SofasComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService, private toast: ToastrService, private userService: UserService) { }
  sofa: Product[] = []
  ngOnInit(): void {
    const type = this.activatedRoute.snapshot.paramMap.get("type");
    this.productService.getProductByCategory(type).subscribe((products) => {
      this.sofa = products.data.productCategory
    }, (err) => {
      this.toast.error(err.error.message)
    })
    this.userService.showSearchBox = false
  }
}
