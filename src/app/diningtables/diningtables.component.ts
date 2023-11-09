import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '../services/filter.service';
import { products } from '../models/products.model';

@Component({
  selector: 'app-diningtables',
  templateUrl: './diningtables.component.html',
  styleUrls: ['./diningtables.component.css']
})
export class DiningtablesComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private filterService: FilterService) { }
  dinings: products[] = []
  ngOnInit(): void {
    const type = this.activatedRoute.snapshot.paramMap.get("type");
    this.filterService.filteringBeds(type)
    this.dinings = this.filterService.filteredProducts
    console.log(this.dinings);
  }
}
