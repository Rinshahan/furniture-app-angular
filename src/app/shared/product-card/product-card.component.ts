import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() name: string;
  @Input() product: Product
}
