import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/products.model';

@Component({
  selector: 'app-diningtables',
  templateUrl: './diningtables.component.html',
  styleUrls: ['./diningtables.component.css']
})
export class DiningtablesComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }
  dinings: Product[] = []
  ngOnInit(): void {

  }
}
