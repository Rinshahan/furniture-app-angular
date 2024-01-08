import { Component, OnInit, inject } from '@angular/core';
import { Product } from 'src/app/core/models/products.model';
import { ProductsService } from 'src/app/core/services/products.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  searchProduct = []
  searchData: string = ''
  ifEnteredSearch: boolean = true
  searchArray = []
  constructor(private userService: UserService, private productService: ProductsService) { }
  allProducts: Product[] = []

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((product) => {
      this.allProducts = product.data.allProducts
    }, (err) => {
      console.log(err);
    })

    this.userService.showSearchBox = true
    this.userService.showCart = true
    this.userService.isLogged
    // console.log(this.searchProduct);
  }

  onSearchEntered(searchValue: string) {
    this.searchData = searchValue
    console.log(this.searchData);

    this.searchArray = this.allProducts.filter((X) => { return X.title.toLowerCase().includes(this.searchData.toLowerCase()) })
    console.log(this.searchArray);

    if (this.searchData.length === 0) {
      this.ifEnteredSearch
    } else {
      this.ifEnteredSearch = false
    }
  }
}
