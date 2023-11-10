import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../models/products.model';
import { FilterService } from '../services/filter.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private filterService: FilterService) { }
  product: products[] = []
  id: string;
  disable: boolean;
  ngOnInit(): void {
    this.disable = this.filterService.disable;
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.filterService.viewProducts(parseInt(this.id))
    this.product = this.filterService.viewedProduct;
    this.userService.showSearchBox = false
  }

  addToCart() {
    this.filterService.goToCart(parseInt(this.id))
  }
}
