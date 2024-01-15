import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/core/models/products.model';
import { ProductsService } from 'src/app/core/services/products.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-diningtables',
  templateUrl: './diningtables.component.html',
  styleUrls: ['./diningtables.component.css']
})
export class DiningtablesComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService, private toast: ToastrService, private userService: UserService) { }
  dinings: Product[] = []
  ngOnInit(): void {
    let type = this.activatedRoute.snapshot.paramMap.get("type")
    console.log(type);
    this.productService.getProductByCategory(type).subscribe((res) => {
      this.dinings = res.data.productCategory
    }, (err) => {
      this.toast.error(err.error.message)
    })
    this.userService.showSearchBox = false
  }
}
