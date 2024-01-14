import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/products.model';
import { UserService } from 'src/app/core/services/user.service';
import { ProductsService } from 'src/app/core/services/products.service';


@Component({
  selector: 'app-beds',
  templateUrl: './beds.component.html',
  styleUrls: ['./beds.component.css']
})
export class BedsComponent implements OnInit {
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private productService: ProductsService) { }

  beds: Product[] = []

  ngOnInit(): void {
    let type = this.activatedRoute.snapshot.paramMap.get("type")
    this.productService.getProductByCategory(type).subscribe((products) => {
      this.beds = products.data.productCategory
    })
    //this.filterService.filteringBeds(type)
    //this.beds = this.filterService.filteredProducts
    this.userService.showSearchBox = false
  }
}
