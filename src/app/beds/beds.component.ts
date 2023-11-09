import { Component, OnInit } from '@angular/core';
import { AllproductsComponent } from '../allproducts/allproducts.component';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Params } from '@angular/router';
import { products } from '../models/products.model';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-beds',
  templateUrl: './beds.component.html',
  styleUrls: ['./beds.component.css']
})
export class BedsComponent implements OnInit {
  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute, private filterService: FilterService) { }

  beds: products[] = []

  ngOnInit(): void {
    let type = this.activatedRoute.snapshot.paramMap.get("type")
    this.filterService.filteringBeds(type)
    this.beds = this.filterService.filteredProducts
  }
}
