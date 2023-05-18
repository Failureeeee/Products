import { Component } from '@angular/core';
import { PRODUCTS } from './data/products-data';
import { Product } from './models/products-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  products: Product[] = PRODUCTS;

  constructor() {
    console.log(this.products)
  }
}
