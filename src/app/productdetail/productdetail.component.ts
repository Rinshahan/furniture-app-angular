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
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.filterService.viewProducts(parseInt(id))
    this.product = this.filterService.viewedProduct;
    this.userService.showSearchBox = false
  }
}
