import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/products.model';
import { UserService } from '../services/user.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  searchProduct: Product[] = []
  searchData: string = ''
  ifEnteredSearch: boolean = true
  searchArray: Product[] = []
  constructor(private userService: UserService, private searchService: SearchService, private productService: ProductsService) { }
  allProducts: Product[]

  ngOnInit(): void {
    this.allProducts = this.productService.allproducts
    this.userService.showSearchBox = true
    this.userService.showCart = true
    this.searchProduct = this.searchService.searchProduct
    this.userService.isLogged
    // console.log(this.searchProduct);
  }

  onSearchEntered(searchValue: string) {
    this.searchData = searchValue
    console.log(this.searchData);

    this.searchArray = this.allProducts.filter((X) => { return X.productname.toLowerCase().includes(this.searchData.toLowerCase()) })
    console.log(this.searchArray);

    if (this.searchData.length === 0) {
      this.ifEnteredSearch
    } else {
      this.ifEnteredSearch = false
    }
  }
}
