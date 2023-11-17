import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from 'src/app/core/services/filter.service';
import { Product } from 'src/app/core/models/products.model';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-beds',
  templateUrl: './beds.component.html',
  styleUrls: ['./beds.component.css']
})
export class BedsComponent implements OnInit {
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private filterService: FilterService) { }

  beds: Product[] = []

  ngOnInit(): void {
    let type = this.activatedRoute.snapshot.paramMap.get("type")
    this.filterService.filteringBeds(type)
    this.beds = this.filterService.filteredProducts
    this.userService.showSearchBox = false
  }
}
