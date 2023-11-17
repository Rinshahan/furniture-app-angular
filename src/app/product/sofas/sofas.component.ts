import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from 'src/app/core/services/filter.service';
import { Product } from 'src/app/core/models/products.model';

@Component({
  selector: 'app-sofas',
  templateUrl: './sofas.component.html',
  styleUrls: ['./sofas.component.css']
})
export class SofasComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private filterService: FilterService) { }
  sofa: Product[] = []
  ngOnInit(): void {
    const type = this.activatedRoute.snapshot.paramMap.get("type");
    this.filterService.filteringBeds(type);
    this.sofa = this.filterService.filteredProducts
  }
}
